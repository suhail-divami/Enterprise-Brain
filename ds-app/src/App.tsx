import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import FoundationsPage from './pages/FoundationsPage'
import FormsPage from './pages/FormsPage'
import ButtonsPage from './pages/ButtonsPage'
import NavigationPage from './pages/NavigationPage'
import OverlaysPage from './pages/OverlaysPage'
import DataDisplayPage from './pages/DataDisplayPage'
import AIChatPage from './pages/AIChatPage'
import LayoutPage from './pages/LayoutPage'
import MediaPage from './pages/MediaPage'
import UtilityPage from './pages/UtilityPage'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <AppShell theme={theme} onThemeToggle={toggle}>
      <Routes>
        <Route path="/" element={<Navigate to="/foundations" replace />} />
        <Route path="/foundations" element={<FoundationsPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/overlays" element={<OverlaysPage />} />
        <Route path="/data-display" element={<DataDisplayPage />} />
        <Route path="/ai-chat" element={<AIChatPage />} />
        <Route path="/layout" element={<LayoutPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/utility" element={<UtilityPage />} />
      </Routes>
    </AppShell>
  )
}
