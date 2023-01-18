import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

function Contactme({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:uj9.uday@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}.${formData.message}(${formData.email})`
    };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left
                 max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact Me
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className='text-2xl font-semibold text-center relative top-12'>
                {"I've got just what you need."} 
                <span className="underline decoration-[#f76eb3]">{"Let's talk!"}</span> 
            </h4>
        </div>
        <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#f76eb3] h-7 w-7 animate-pulse"/>
                <p className="text-1xl">+1 215-966-7107</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#f76eb3] h-7 w-7 animate-pulse"/>
                <p className="text-1xl">uj9.uday@gmail.com</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#f76eb3] h-7 w-7 animate-pulse"/>
                <p className="text-1xl">Philadelphia, PA-19104</p>
            </div>

            <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-x-2">
                    <input {...register("name")} className="contactInput" placeholder="Name" type="text" />
                    <input {...register("email")} className="contactInput" placeholder="Email" type="email" />
                </div>
                <input {...register("subject")} className="contactInput" placeholder="Subject"></input>
                <textarea {...register("message")} className="contactInput" placeholder="Message"/>
                <button type="submit" className="bg-[#f76eb3] py-5 px-10 rounded-md text-black font-bold text-lg">
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contactme