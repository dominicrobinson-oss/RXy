// app/components/Navigation.tsx

import LegacyNav from '@/components/legacy/NavigationLegacy'
import MobileNav from '@/components/navigation/MobileNav'
import MobileDrawer from '@/components/navigation/MobileDrawer'

let MainNav: any = null

// Load mega menu only when enabled
if (process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true') {
  MainNav = require('@/components/navigation/MainNav').default
}

export default function NavigationWrapper(props: any) {
  const DesktopNav =
    process.env.NEXT_PUBLIC_ENABLE_MEGA_MENU === 'true' && MainNav
      ? MainNav
      : LegacyNav

  return (
    <>
      {/* Desktop nav — mega-menu or legacy, visible lg+ */}
      <div className="hidden lg:flex">
        <DesktopNav {...props} />
      </div>

      {/* Mobile top bar — visible below lg */}
      <div className="flex lg:hidden">
        <MobileNav />
      </div>

      {/* Slide-in drawer — always mounted, open state controlled by Zustand */}
      <MobileDrawer />
    </>
  )
}
