import React from 'react'
import { ReactComponent as ReactIcon } from '../../assets/reactIcon.svg';
import { ReactComponent as VueIcon } from '../../assets/vueIcon.svg';

export const Templates = () => {
  return (
    <section className="mt-12">
      <p className="pt-8 pb-4 text-light">
        Checkout some of my starter templates:
      </p>
      <div className="sm:columns-2 columns-auto gap-4">
        <a
          href="https://github.com/kazmi066/react-tailwind-rtk-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 relative block overflow-hidden group bg-[#1c1919] transition rounded-md border-[0.1px] border-[#565656] hover:border-[#777777]"
        >
          <ReactIcon className="absolute -right-4 -bottom-8 group-hover:stroke-blue-500 w-20 h-20 opacity-50" />
          <div className="leading-normal inline-block -z-10">
            React-Tailwind-RTK Template
          </div>
        </a>
        <a
          href="https://github.com/kazmi066/Vue-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 relative block overflow-hidden group bg-[#1c1919] transition rounded-md border-[0.1px] border-[#565656] hover:border-[#777777]"
        >
          <VueIcon className="absolute -right-4 -bottom-8 group-hover:stroke-green-500 w-20 h-20 opacity-50" />
          <div className="leading-normal inline-block -z-10">
            Vue-portfolio Template
          </div>
        </a>
      </div>
    </section>
  )
}
