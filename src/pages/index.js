import { useForm, Controller } from "react-hook-form";
import { Button, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react";
import { toast } from "react-toastify";

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      toast(" Email sent successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error(" Something went wrong, try again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex justify-center h-full py-20 sm:p-40 bg-gradient-to-r from-blue-400 to-purple-500 items-center">
      <div className="sm:max-w-[700px] w-full px-4 sm:px-0 flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-[40px]   flex flex-col gap-12 myShadow"
        >
          <h1 className="text-3xl font-bold uppercase text-center text-gray-800">
            Feedback Form
          </h1>
          <FeedbackRadio
            name="satisfactionRating"
            label="1- On a scale of 1-5, how satisfied are you with the communication and responsiveness of our team?"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackRadio
            name="effectiveness"
            label="2- How would you rate the overall effectiveness of the social media campaigns we executed this month?"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackRadio
            name="satisfied"
            label="3-  How satisfied are you with the quality and relevance of the content we produced for your social media channels"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackRadio
            name="engagement"
            label="4- How do you feel about the level of engagement and interaction from your target audience on social media this month?"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackRadio
            name="performance"
            label="5-  How satisfied are you with the analytics and performance reports provided to you?"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackRadio
            name="efficiency"
            label="6-  How would you rate the efficiency and effectiveness of our ad spend in driving results for your social media goals?"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackRadio
            name="strategy"
            label="7-  On a scale of 1-5, how well do you think our strategy aligns with your overall business goals?"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackRadio
            name="serviceSupport"
            label="8-  How satisfied are you with the level of customer service and support provided by our team?"
            control={control}
            rules={{ required: true }}
            errors={errors}
          />
          <FeedbackInput
            name="specificContent"
            label="9- Are there any specific types of content you would like to see more or less of in the future?"
            control={control}
            rules={{ required: false }}
            errors={errors}
          />
          <FeedbackInput
            name="additionalData"
            label="10- Is there any additional data or specific insights you would like to see in our reports?"
            control={control}
            rules={{ required: false }}
            errors={errors}
          />
          <FeedbackInput
            name="competitors"
            label="11- Are there any specific competitors or metrics you would like us to focus on more"
            control={control}
            rules={{ required: false }}
            errors={errors}
          />
          <FeedbackInput
            name="anything"
            label="12-  Is there anything we can do to improve our support and service?"
            control={control}
            rules={{ required: false }}
            errors={errors}
          />
          <div className="w-full">
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  {...field}
                  fullWidth={true}
                  minRows={6}
                  label="Are there any areas you think we should focus on to enhance our performance in the coming months?"
                  labelPlacement="outside"
                  placeholder="Enter your Suggestions"
                  classNames={{
                    label: "text-md",
                  }}
                />
              )}
            />
            {errors.message && (
              <p className="text-red-600 py-3">This field is required.</p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-purple-500 text-white hover:bg-blue-600"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

const FeedbackRadio = ({ name, label, control, rules, errors }) => (
  <div className="w-full">
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <RadioGroup
          {...field}
          classNames={{
            label: "text-black",
            value: "text-black",
          }}
          orientation="horizontal"
          label={label}
          color="danger"
         >
          {[1, 2, 3, 4, 5].map((value) => (
            <Radio
              key={value}
              value={String(value)}
              description={String(value)}
            />
          ))}
        </RadioGroup>
      )}
    />
    {errors[name] && (
      <p className="text-red-600 py-3">This field is required.</p>
    )}
  </div>
);

const FeedbackInput = ({ name, label, control, rules, errors }) => (
  <div className="w-full pt-3">
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <Input
          {...field}
          type="text"
          label={label}
          labelPlacement="outside"
          placeholder="Enter your answer here"
          className="text-black"
          classNames={{
            label: "text-md",
          }}
        />
      )}
    />
    {errors[name] && (
      <p className="text-red-600 py-3">This field is required.</p>
    )}
  </div>
);
