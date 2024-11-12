import React from 'react'

const Influencer = () => {
    return (
        <>
          <div className='flex justify-center self-stretch'>
            <div className='container-xs flex justify-center gap-9 md:flex-col md:px-5'>
              <div className='flex w-full flex-col gap-11'>
                <div>
                  <div className='flex w-full items-center gap-4 sm:flex-col'>
                    <div className='flex w-full flex-col gap-2 sm:w-full'>
                      <img src="/Influencer.png" alt="Influencer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Influencer