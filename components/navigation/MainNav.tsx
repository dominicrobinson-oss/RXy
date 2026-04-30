'use client'

import React, { useEffect, useRef, useState } from 'react'
import LegacyNav from '@/components/legacy/NavigationLegacy'
import MegaMenuTrending from './MegaMenuTrending'
import MegaMenuProtein from './MegaMenuProtein'
import MegaMenuSupplements from './MegaMenuSupplements'
import MegaMenuVitamins from './MegaMenuVitamins'
import MegaMenuSnacks from './MegaMenuSnacks'
import MegaMenuAccessories from './MegaMenuAccessories'
import MegaMenuCollabs from './MegaMenuCollabs'
import MegaMenuClearance from './MegaMenuClearance'

export default function MainNav() {
  const [isMounted, setIsMounted] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const openTimer = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)
  const navRef = useRef<HTMLElement | null>(null)
  const OPEN_DELAY = 80
  const CLOSE_DELAY = 150

  useEffect(() => {
    setIsMounted(true)

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    function onDocClick(e: MouseEvent) {
      if (!navRef.current) return
      if (!(e.target instanceof Node)) return
      if (!navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDocClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDocClick)
    }
  }, [])

  function openWithDelay(name: string) {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    if (openTimer.current) return
    openTimer.current = window.setTimeout(() => {
      setOpenMenu(name)
      openTimer.current = null
    }, OPEN_DELAY)
  }

  function closeWithDelay() {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current)
      openTimer.current = null
    }
    if (closeTimer.current) return
    closeTimer.current = window.setTimeout(() => {
      setOpenMenu(null)
      closeTimer.current = null
    }, CLOSE_DELAY)
  }

  function handleButtonKeyDown(e: React.KeyboardEvent, name: string) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpenMenu(name)
      requestAnimationFrame(() => {
        const panel = document.getElementById(`megamenu-${name}`)
        const firstLink = panel?.querySelector<HTMLElement>('a,button,[tabindex="0"]')
        firstLink?.focus()
      })
    }
    if (e.key === 'Escape') setOpenMenu(null)
  }

  if (!isMounted) {
    return <LegacyNav />
  }

  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0

  if (isTouch) {
    return <LegacyNav />
  }

  return (
    <nav ref={navRef} className="relative">
      <ul className="flex items-center space-x-4">
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('protein')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'protein'}
            aria-controls="megamenu-protein"
            onFocus={() => openWithDelay('protein')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'protein')}
            onMouseEnter={() => openWithDelay('protein')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'protein' ? null : 'protein')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Protein
          </button>
          {openMenu === 'protein' && (
            <div id="megamenu-protein" role="region" aria-label="Protein menu">
              <MegaMenuProtein />
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('trending')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'trending'}
            aria-controls="megamenu-trending"
            onFocus={() => openWithDelay('trending')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'trending')}
            onMouseEnter={() => openWithDelay('trending')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'trending' ? null : 'trending')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Trending
          </button>
          {openMenu === 'trending' && (
            <div id="megamenu-trending" role="region" aria-label="Trending menu">
              <MegaMenuTrending />
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('supplements')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'supplements'}
            aria-controls="megamenu-supplements"
            onFocus={() => openWithDelay('supplements')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'supplements')}
            onMouseEnter={() => openWithDelay('supplements')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'supplements' ? null : 'supplements')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Supplements
          </button>
          {openMenu === 'supplements' && (
            <div id="megamenu-supplements" role="region" aria-label="Supplements menu">
              <MegaMenuSupplements />
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('vitamins')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'vitamins'}
            aria-controls="megamenu-vitamins"
            onFocus={() => openWithDelay('vitamins')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'vitamins')}
            onMouseEnter={() => openWithDelay('vitamins')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'vitamins' ? null : 'vitamins')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Vitamins
          </button>
          {openMenu === 'vitamins' && (
            <div id="megamenu-vitamins" role="region" aria-label="Vitamins menu">
              <MegaMenuVitamins />
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('snacks')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'snacks'}
            aria-controls="megamenu-snacks"
            onFocus={() => openWithDelay('snacks')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'snacks')}
            onMouseEnter={() => openWithDelay('snacks')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'snacks' ? null : 'snacks')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Bars, Snacks & Foods
          </button>
          {openMenu === 'snacks' && (
            <div id="megamenu-snacks" role="region" aria-label="Snacks menu">
              <MegaMenuSnacks />
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('accessories')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'accessories'}
            aria-controls="megamenu-accessories"
            onFocus={() => openWithDelay('accessories')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'accessories')}
            onMouseEnter={() => openWithDelay('accessories')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'accessories' ? null : 'accessories')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Accessories
          </button>
          {openMenu === 'accessories' && (
            <div id="megamenu-accessories" role="region" aria-label="Accessories menu">
              <MegaMenuAccessories />
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('collabs')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'collabs'}
            aria-controls="megamenu-collabs"
            onFocus={() => openWithDelay('collabs')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'collabs')}
            onMouseEnter={() => openWithDelay('collabs')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'collabs' ? null : 'collabs')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Collabs
          </button>
          {openMenu === 'collabs' && (
            <div id="megamenu-collabs" role="region" aria-label="Collabs menu">
              <MegaMenuCollabs />
            </div>
          )}
        </li>
        <li
          className="relative"
          onMouseEnter={() => openWithDelay('clearance')}
          onMouseLeave={() => closeWithDelay()}
        >
          <button
            aria-haspopup="true"
            aria-expanded={openMenu === 'clearance'}
            aria-controls="megamenu-clearance"
            onFocus={() => openWithDelay('clearance')}
            onBlur={() => closeWithDelay()}
            onKeyDown={(e) => handleButtonKeyDown(e, 'clearance')}
            onMouseEnter={() => openWithDelay('clearance')}
            onClick={(e) => {
              e.preventDefault()
              setOpenMenu(openMenu === 'clearance' ? null : 'clearance')
            }}
            className="px-3 py-2 text-sm font-medium hover:text-black focus:outline-none"
          >
            Clearance
          </button>
          {openMenu === 'clearance' && (
            <div id="megamenu-clearance" role="region" aria-label="Clearance menu">
              <MegaMenuClearance />
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}
