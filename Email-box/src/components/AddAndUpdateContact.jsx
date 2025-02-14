import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("⚠ Name is required"),
  email: Yup.string()
    .email("⚠ Invalid email")
    .required("⚠ Email is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contactData) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contactData);
      onClose();
      toast.success("Contact added successfully!");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const updateContact = async (contactData, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contactData);
      onClose();
      toast.success(" Contact updated successfully!");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="mb-4 text-lg font-semibold text-black">
        {isUpdate ? "Update Contact" : "Add Contact"}
      </h2>

      <Formik
        validationSchema={contactSchemaValidation}
        initialValues={{
          name: isUpdate ? contact.name : "",
          email: isUpdate ? contact.email : "",
        }}
        onSubmit={(values) => {
          console.log("Form Values:", values);
          isUpdate ? updateContact(values, contact.id) : addContact(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="flex flex-col gap-4">
          
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-10 border rounded-md px-2 text-black ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-xs text-red-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-10 border rounded-md px-2 text-black ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-xs text-red-500"
              />
            </div>

            <button
              type="submit"
              className="self-end bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
