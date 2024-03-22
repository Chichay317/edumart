import React, { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import { BsInfoCircleFill } from "react-icons/bs";
import { Controller, useForm } from "react-hook-form";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../firebaseConfig";
import { UploadMe } from "./UploadMe";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { setFormData } from "../../redux/cohortFormData";
import { errorPropsGetter } from "../../utilComponents/formValidation";
import pick from "lodash/pick";
import Save from "../../utilComponents/SaveButton/Save";
import Edit from "../../utilComponents/EditButton/Edit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const storage = getStorage(app);
const storageRef = ref(storage);

const errorMessages = {
  required(field = "Field") {
    return field + " is required in order to submit";
  },
};

let buildSchema = (data) => {
  return Yup.object().shape({
    itemName: Yup.string().required(errorMessages.required("An item name")),
    itemDescription: Yup.string()
      .required(errorMessages.required("An item description"))
      .max(200, "Word limit exceeded! Please shorten your text.")
      .min(5, "Please provide a valid item description"),
    itemPrice: Yup.string().required(errorMessages.required("An item price")),
    sellerName: Yup.string().required(
      errorMessages.required("A seller's name")
    ),
    sellerNumber: Yup.string().required(
      errorMessages.required("A seller's phone number")
    ),
    sellerEmail: Yup.string().required(
      errorMessages.required("A seller's email")
    ),
    itemLocation: Yup.string().required(
      errorMessages.required("An item location")
    ),
    itemCategory: Yup.string().required(
      errorMessages.required("An item category")
    ),
    itemAvailability: Yup.string().required(
      errorMessages.required("An item availability")
    ),
    croppedImage: Yup.mixed()
      .test({
        name: "fileType",
        exclusive: true,
        test: (value) => {
          if (!value) {
            return false;
          }
          return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
        },
        message: "Please upload a valid image file (jpeg, png, jpg).",
      })
      .test({
        name: "fileSize",
        exclusive: true,
        test: (value) => {
          if (!value) {
            return false;
          }
          return value.size <= 15 * 1024 * 1024;
        },
        message: "File size must be less than or equal to 15MB.",
      }),
  });
};

const CohortForm = () => {
  const form = useForm({
    resolver: yupResolver(buildSchema()),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = form;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);

  const getErrorProps = errorPropsGetter(errors);

  const onSubmit = async (data) => {
    try {
      setFormData(data);

      if (isEditMode) {
        const allowedfields = pick(data, [
          "itemName",
          "itemDescription",
          "itemPrice",
          "sellerName",
          "sellerNumber",
          "sellerEmail",
          "itemLocation",
          "itemCategory",
          "itemAvailability",
          "croppedImage",
        ]);
      }

      if (data && !isSubmitted) {
        toast.success(
          <>
            <div>Successfully submitted!</div>
          </>
        );
      }

      setIsSubmitted(true);

      reset({
        itemName: data.itemName || "",
        sellerName: data.sellerName || "",
        sellerNumber: data.sellerNumber || "",
        sellerEmail: data.sellerEmail || "",
        itemPrice: data.itemPrice || "",
        itemLocation: data.itemLocation || "",
        itemCategory: data.itemCategory || "",
        itemAvailability: data.itemAvailability || "",
        croppedImage: data.croppedImage || null,
        itemDescription: data.itemDescription || "",
      });
      setIsEditMode(false);

      const croppedImageRef = ref(storage, data.croppedImage.name);

      await uploadBytes(croppedImageRef, data.croppedImage);

      const downloadURL = await getDownloadURL(croppedImageRef);
      const payload = { ...data, croppedImage: downloadURL };

      await axios.post("http://localhost:4000/submitForm", payload);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit form data");
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditMode(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (err) => {
        console.log(err, form.getValues(), "error");
      })}
    >
      <div>
        <div className="mt-8 mb-14">
          <Controller
            name="croppedImage"
            control={control}
            render={({ field }) => {
              return (
                <UploadMe
                  file={field.value}
                  onChange={(file) => field.onChange(file)}
                  error={errors?.croppedImage?.message}
                  isDisabled={!isEditMode}
                />
              );
            }}
          />
        </div>

        <div className="my-10">
          <div className="grid grid-cols-2 gap-x-6">
            <InputField
              label="Seller's Name"
              placeholder="Enter your name"
              {...register("sellerName")}
              {...getErrorProps("sellerName")}
              isDisabled={!isEditMode}
            />
            <InputField
              label="Seller's Email"
              placeholder="Enter your email"
              {...register("sellerEmail")}
              {...getErrorProps("sellerEmail")}
              isDisabled={!isEditMode}
              infoIcon={<BsInfoCircleFill />}
              tooltipText="Your email will be used to reach you when someone indicates interest to buy your product. Please use a valid email address."
            />
            <InputField
              type="number"
              label="Seller's Phone Number"
              placeholder="The Phone number of the seller"
              {...register("sellerNumber")}
              {...getErrorProps("sellerNumber")}
              isDisabled={!isEditMode}
            />
            <InputField
              label="Item Name"
              placeholder="The Item Name"
              {...register("itemName")}
              {...getErrorProps("itemName")}
              infoIcon={<BsInfoCircleFill />}
              isDisabled={!isEditMode}
              tooltipText="Please provide a descriptive name for your item."
            />
            <InputField
              type="number"
              label="Item Price"
              placeholder="The Price of the Item"
              {...register("itemPrice")}
              {...getErrorProps("itemPrice")}
              infoIcon={<BsInfoCircleFill />}
              isDisabled={!isEditMode}
              tooltipText="Your item prices are automatically considered in Naira."
            />
            <InputField
              label="Item Category"
              type="select"
              options={[
                "Books",
                "Kitchen Utensils",
                "Gadgets",
                "Household Materials",
              ]}
              isDisabled={!isEditMode}
              {...register("itemCategory")}
              {...getErrorProps("itemCategory")}
            />
            <InputField
              label="Item Availability"
              type="select"
              options={["Available", "Unavailable"]}
              isDisabled={!isEditMode}
              {...register("itemAvailability")}
              {...getErrorProps("itemAvailability")}
            />
            <InputField
              label="Location of Item"
              placeholder="The Location of the Item"
              {...register("itemLocation")}
              {...getErrorProps("itemLocation")}
              infoIcon={<BsInfoCircleFill />}
              isDisabled={!isEditMode}
              tooltipText="Please make your location as clear as possible."
            />
            <InputField
              type="textarea"
              label="Item Description"
              placeholder="The Description of the Item"
              {...register("itemDescription")}
              {...getErrorProps("itemDescription")}
              isDisabled={!isEditMode}
            />
          </div>
          <div className="flex mt-20 gap-6 cursor-pointer items-center justify-end">
            {isEditMode ? (
              <Save
                onSave={handleSubmit(onSubmit)}
                formReset={reset}
                errors={form.formState.errors}
              />
            ) : (
              <Edit onClick={handleEdit} />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CohortForm;
