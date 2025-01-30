import "@/css/tos.css";

function page() {
  return (
    <div className="tos mb-8 mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-1 mb-4 items-center">
        <h1>Terms of Service</h1>
        <p className="pr text-center">
          By subscribing to or using our services, you agree to comply with
          these Terms. Please read them carefully.
        </p>
      </div>

      <div className="updated-on font-bold">Last updated on 09. January 2025</div>

      <div className="flex flex-col gap-1 w-full term">
        <span className="font-bold">Subscription Terms</span>
        <ul className="opacity-90 gap-1">
          <li>
            The subscription fee is charged on a monthly basis and is
            non-refundable in the event of cancellation by the customer.
          </li>
          <li>
            The subscription is active as long as payments are made. Non-payment
            will result in the suspension of services.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-1 w-full term">
        <span className="font-bold">Refund and Cancellation Policy</span>
        <ul className="opacity-90 gap-1">
          <li>
            Subscription fees are non-refundable, including cases where the
            subscriber chooses to cancel their subscription before the end of
            the billing cycle.
          </li>
          <li>
            The company reserves the right to terminate the subscription for
            misuse or failure to comply with these terms.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-1 w-full term">
        <span className="font-bold">Service Limitations</span>
        <ul className="opacity-90 gap-1">
          <li>
            IRU personnel will only handle incidents within their training, such
            as minor fire extinguishing using hand-held extinguishers and
            providing basic first aid.
          </li>
          <li>
            IRU services do not replace official emergency services like
            firefighters, law enforcement, or medical professionals.
          </li>

          <li>
            The IRU cannot guarantee prevention of harm or damage but will take
            reasonable measures to mitigate risks.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-1 w-full term">
        <span className="font-bold">Customer Responsibilities</span>
        <span className="font-semibold opacity-90">1. Subscribers must:</span>
        <ul className="opacity-90 gap-1">
          <li>
            Provide accurate information when subscribing and updating it when
            necessary.
          </li>
          <li>
            Notify the company immediately if the emergency dispatch button is
            triggered accidentally.
          </li>
        </ul>

        <p className="opacity-90">
          2. Misuse of services, including false alarms or improper use of the
          dispatch button, may result in additional charges or termination of
          the subscription.
        </p>
      </div>

      <div className="flex flex-col gap-1 w-full term">
        <span className="font-bold">Liability</span>
        <span className="opacity-90">The company is not liable for:</span>
        <ul className="opacity-90 gap-1">
          <li>
            Delays or failures caused by factors beyond its control, including
            natural disasters, extreme weather, or widespread emergencies.
          </li>
          <li>
            Any damages resulting from the misuse of services by the customer.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
