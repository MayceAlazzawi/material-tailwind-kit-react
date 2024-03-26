import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  const [MsgSent, setMsgSent] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2quhu2n', 'template_91pbhth', form.current, {
        publicKey: '8Yj4TQORNo50jHriN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMsgSent("Message sent successfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMsgSent("Message sending faild!")
        },
      );
  };
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Creativity Makers Bringing Ideas to Life.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We're here to empower innovators to turn their visions into reality. 
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4" id="aboutus">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-6/12 flex flex-col justify-center items-center" id="aboutus">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                About Us
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">

              At Creative Makers, we're dedicated to transforming ideas into reality. Our team of passionate creators collaborates closely with clients to deliver innovative solutions tailored to their needs. With a focus on excellence and customer satisfaction, we empower individuals and businesses to succeed in the digital world. Join us in bringing your vision to life.              </Typography>
              <Button variant="filled">Join us now!</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4" id="services">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Let's Collaborate">
            Partner with us to create something extraordinary.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3" >
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <div id="contactus">
          <PageTitle section="Contact Us" heading="Let's Connect" >
            Drop us a message and let's start a conversation.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12" ref={form} onSubmit={sendEmail}>
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" name="from_name"/>
              <Input variant="outlined" size="lg" label="Email Address" name="from_email" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} name="message" />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth onClick={sendEmail} >
              Send Message
            </Button>
            {MsgSent && MsgSent}
          </form>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
