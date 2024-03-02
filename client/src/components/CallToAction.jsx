import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div
      className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center
    items-center rounded-tl-3xl rounded-br-3xl"
    >
      <div className="flex-1 items-center flex flex-col">
        <h2 className="text-2xl">Want to learn about JavaScript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resourses with 100 JavaScript Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener norefferer"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="flex-1 p-7">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};

export default CallToAction;
