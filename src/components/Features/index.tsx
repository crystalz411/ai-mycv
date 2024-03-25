import CV from "./cv.png";
import Mail from "./mail.png";
import Interview from "./interview.png";
import Card from "../../UIcomponts/Card";
import { Features as FeatureScroll } from "../../UIcomponts/Card/features-enum";
const Features = () => {

  return (
    <div className="flex flex-wrap justify-center pt-16 pb-16">
      <Card
        title="Cover Letter"
        subtitle="Produces unlimited tailored CVs Highlights areas for improvement Shows gaps on CV compared to Job"
        buttonText=" Create Cover Letter"
        FeatureIds={FeatureScroll.coverLetter}
        svgImage={
          <svg
            width="20%"
            height="20%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      />
      <Card
        title="Resume"
        subtitle=" Produces unlimited tailored CVs 
        Highlights areas for improvement 
        Shows gaps on CV compared to Job"
        buttonText="Create Resume"
        FeatureIds={FeatureScroll.resume}
        svgImage={
          <svg
            width="20%"
            height="20%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18.5H15M7 15H17M5 2H19C20.1046 2 21 2.99492 21 4.22222V19.7778C21 21.0051 20.1046 22 19 22H5C3.89543 22 3 21.0051 3 19.7778V4.22222C3 2.99492 3.89543 2 5 2ZM11.9976 6.21194C11.2978 5.4328 10.1309 5.22321 9.25414 5.93667C8.37738 6.65013 8.25394 7.84299 8.94247 8.6868C9.631 9.53061 11.9976 11.5 11.9976 11.5C11.9976 11.5 14.3642 9.53061 15.0527 8.6868C15.7413 7.84299 15.6329 6.64262 14.7411 5.93667C13.8492 5.23072 12.6974 5.4328 11.9976 6.21194Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      />
      <Card
        title="Interview Buddy"
        subtitle="Produces unlimited tailored CVs 
        Highlights areas for improvement 
        Shows gaps on CV compared to Job"
        buttonText="Inverview Buddy"
        FeatureIds={FeatureScroll.interviewBuddy}
        svgImage={
          <svg
            width="20%"
            height="20%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4996 9.00224C10.6758 8.50136 11.0236 8.079 11.4814 7.80998C11.9391 7.54095 12.4773 7.4426 13.0006 7.53237C13.524 7.62213 13.9986 7.89421 14.3406 8.30041C14.6825 8.70661 14.8697 9.22072 14.8689 9.75168C14.8689 11.2506 12.6205 12 12.6205 12M12.6495 15H12.6595M12.4996 20C17.194 20 20.9996 16.1944 20.9996 11.5C20.9996 6.80558 17.194 3 12.4996 3C7.8052 3 3.99962 6.80558 3.99962 11.5C3.99962 12.45 4.15547 13.3636 4.443 14.2166C4.55119 14.5376 4.60529 14.6981 4.61505 14.8214C4.62469 14.9432 4.6174 15.0286 4.58728 15.1469C4.55677 15.2668 4.48942 15.3915 4.35472 15.6408L2.71906 18.6684C2.48575 19.1002 2.36909 19.3161 2.3952 19.4828C2.41794 19.6279 2.50337 19.7557 2.6288 19.8322C2.7728 19.9201 3.01692 19.8948 3.50517 19.8444L8.62619 19.315C8.78127 19.299 8.85881 19.291 8.92949 19.2937C8.999 19.2963 9.04807 19.3029 9.11586 19.3185C9.18478 19.3344 9.27145 19.3678 9.44478 19.4345C10.3928 19.7998 11.4228 20 12.4996 20Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      />
    </div>
  );
};
export default Features;
