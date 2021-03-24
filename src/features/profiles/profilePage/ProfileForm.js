import { Form, Formik } from "formik";
import React from "react";
import { Button } from "semantic-ui-react";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MyTextInput from "../../../app/common/form/MyTextInput";
import * as Yup from "yup";
import { updateUserProfile } from "../../../app/firestore/firestoreService";
import { toast } from "react-toastify";

const ProfileForm = ({ profile }) => {
  return (
    <Formik
      initialValues={{
        displayName: profile.displayName,
        description: profile.description,
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await updateUserProfile(values);
        } catch (error) {
          toast.error(error.message);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="ui form">
          <MyTextInput name="displayName" placeholder="Display Name" />
          <MyTextArea name="description" placeholder="Description" />
          <Button
            loading={isSubmitting}
            disabled={isSubmitting || !isValid || !dirty}
            floated="right"
            type="submit"
            size="large"
            content="Update Profile"
            positive
          />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
