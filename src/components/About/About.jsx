export default function About() {
  return (
    <div className="py-16 bg-slate-300">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://i.pinimg.com/564x/50/6a/fa/506afa51f603c09747a9198c7b4371c2.jpg"
              alt="image"
              className=" h-96"
              style={{ boxShadow: "rgb(110 103 103) 6px 5px 6px" }}
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              We Are Challanging The Latest IT Trends With Our Ethics, Principal
              And Values
            </h2>
            <p className="mt-6 text-gray-600">
              Cyber Instant Private Limited (CIPL) is a registered startup
              operating as a Private Limited Indian Non-Government Company
              incorporated in India on 25 November 2021 (Two years old). Its
              registered office is in Indore, Madhya Pradesh, India. The Company
              is engaged in the Software Industry
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
