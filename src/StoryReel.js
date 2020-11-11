import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://images.unsplash.com/photo-1605010125115-88a96aa943ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"   
        title="Nataliya"
        profileSrc="https://images.unsplash.com/profile-1594918935171-007d2093336dimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
      />

      <Story 
        image="https://images.unsplash.com/photo-1604998946269-f8d8385d2b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Max van"
        profileSrc="https://images.unsplash.com/profile-1600882868165-1e6a7362fa7dimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
      />

      <Story 
        image="https://images.unsplash.com/photo-1604992867356-196775f5f8f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Remy loz"
        profileSrc="https://images.unsplash.com/profile-1594201338282-eff4c77d2f6eimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
      />

      <Story 
        image="https://images.unsplash.com/photo-1604983066402-34eba2b3b67d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Sora Sangano"
        profileSrc="https://images.unsplash.com/profile-1547110489599-8ff643d20410?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
      />

      <Story 
        image="https://images.unsplash.com/photo-1604971662477-a811fded05e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Riley"
        profileSrc="https://images.unsplash.com/profile-1570439398162-340dab6feb42image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
      />
      
    </div>
  )
}

export default StoryReel
