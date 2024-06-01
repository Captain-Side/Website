import React from 'react'
import { Banner, Button } from 'flowbite-react';
import { HiArrowRight, HiX } from 'react-icons/hi';

function Maintenance() {
  return (
    <Banner>
      <div className="flex w-full justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            
            <span className="text-base flex flex-wrap text-center justify-center items-center">
            Our website is currently under maintenance, but don't miss out on the excitement—join our Discord server where all the thrilling events are happening right now!&nbsp;
              <Button
                href="https://discord.gg/dcMqyYwkwT"
                color="purple"
                size="sm"
                className="text-lg font-medium hover:underline" 
              >
                Join Now
                <HiArrowRight className="ml-2" />
              </Button>
            </span>
          </p>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  )
}

export default Maintenance;