"use client"

import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import SocialLink from "./SocialLink"

function Icons() {
  const data = [
    {
      _id: 1,
      name: "Facebook",
      link: "#",
    },
    {
      _id: 2,
      name: "Linkedin",
      link: "#",
    },
    {
      _id: 3,
      name: "Pinterest",
      link: "#",
    },
    {
      _id: 4,
      name: "Instagram",
      link: "#",
    },
    {
      _id: 5,
      name: "Twitter",
      link: "#",
    },
    {
      _id: 6,
      name: "Youtube",
      link: "#",
    },
  ]

  // Updated to be case-insensitive
  const getSocialLinks = (name) =>
    (data && data.length > 0 && data.find((social) => social.name.toLowerCase() === name.toLowerCase())?.link) || "#"

  return (
    <div className="flex w-fit items-center gap-2 lg:gap-4 mx-auto h-full">
      <SocialLink link={getSocialLinks("Youtube")} icon={FaYoutube} />
      <SocialLink link={getSocialLinks("Facebook")} icon={FaFacebookF} />
      <SocialLink link={getSocialLinks("Twitter")} icon={FaXTwitter} />
      <SocialLink link={getSocialLinks("Instagram")} icon={FaInstagram} />
      <SocialLink link={getSocialLinks("Linkedin")} icon={FaLinkedinIn} />
      <SocialLink link={getSocialLinks("Pinterest")} icon={FaPinterestP} />
    </div>
  )
}

export default Icons
