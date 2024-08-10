import React, { useState } from "react";
import { Card } from "@/components/Reusable/card";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface FeedbackProps {
  onClose: () => void;
}

export default function Feedback({ onClose }: FeedbackProps) {
  const [submit, setSubmit] = useState(false);
  const shareUrl = "https://hikalunara.vercel.app";

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <h2 className="font-baloo text-center mb-4 text-xl md:text-3xl text-pink-600">
          Feedback Hikalunara
        </h2>
        <p className="font-baloo text-center text-md md:text-lg text-pink-500 mb-4">
          Unlock the magic! Share your feedback and help us create something
          extraordinary together.
        </p>
        <form
          name="gform"
          id="gform"
          action="https://docs.google.com/forms/d/e/1FAIpQLSe8v3l506EShNViG7Mghqv2qjqIT1iQ0wdRasNFixcDgrBKtw/formResponse?"
          target="hidden_iframe"
          onSubmit={() => setSubmit(true)}
          className="flex flex-col space-y-4 md:w-96 w-48"
        >
          <label className="font-baloo text-pink-600 font-semibold text-md md:text-2xl">
            Name
          </label>
          <input
            type="text"
            id="entry.412426728"
            name="entry.412426728"
            placeholder="Enter your name"
            required
            className="p-2 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <label className="font-baloo text-pink-600 font-semibold text-md md:text-2xl">
            Feedback
          </label>
          <textarea
            id="entry.1606622186"
            name="entry.1606622186"
            placeholder="Your feedback"
            required
            rows={4}
            className="p-2 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {submit ? (
            <label className="m-4 font-baloo text-pink-600 font-semibold">
              Thank's For Your Feedback
            </label>
          ) : (
            <div className="flex space-x-4">
              <button
                type="reset"
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                Submit
              </button>
            </div>
          )}
        </form>
        <iframe
          title="google-form"
          style={{ display: "none" }}
          name="hidden_iframe"
          id="hidden_iframe"
        ></iframe>
        <p className="text-sm md:text-xl font-baloo text-white pt-4">Share To:</p>
        <div className="flex justify-between space-x-4 pt-4">
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        </div>
      </Card>
    </div>
  );
}
