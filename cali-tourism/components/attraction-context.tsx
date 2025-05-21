// DOCUMENTACIÓN: Contexto para gestionar el estado global de las atracciones turísticas
// Este componente implementa Context API para proporcionar un estado compartido entre componentes.
// Gestiona el estado de la atracción seleccionada, categoría activa, pestaña activa y visibilidad del panel.
// Implementa persistencia de estado mediante localStorage para mantener selecciones entre recargas.
// Define la función global showAttractionDetails para ser accesible desde cualquier parte de la aplicación.
// Proporciona un hook personalizado useAttractions para facilitar el acceso al contexto.
// Incluye tipado TypeScript para mejorar la seguridad del código y la experiencia de desarrollo.

"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { attractionsData } from "@/lib/attractions-data"

// Definir el tipo para una atracción
export interface Attraction {
  id: string
  name: string
  category: string
  location: string
  latitude: number
  longitude: number
  rating: number
  reviews: number
  shortDescription: string
  description: string
  hours: string
  price: string
  visitDuration: string
  image: string
  images?: string[]
  youtubeId?: string
  facts?: string[]
  funFact?: string
  bestTime?: string
  tips?: string[]
  googlePhotos?: { url: string; author: string }[]
  googlePhotosLoading?: boolean
}

// Definir el tipo para el contexto
interface AttractionContextType {
  selectedAttraction: Attraction | null
  setSelectedAttraction: (attraction: Attraction | null) => void
  activeCategory: string
  setActiveCategory: (category: string) => void
  activeTab: string
  setActiveTab: (tab: string) => void
  showDetailsPanel: boolean
  setShowDetailsPanel: (show: boolean) => void
  handleSelectAttraction: (attraction: Attraction) => void
  loadGooglePhotos: (attractionId: string) => void
}

// Crear el contexto
const AttractionContext = createContext<AttractionContextType | undefined>(undefined)

// Proveedor del contexto
export function AttractionProvider({ children }: { children: ReactNode }) {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("info")
  const [showDetailsPanel, setShowDetailsPanel] = useState(false)

  // Función para manejar la selección de una atracción
  const handleSelectAttraction = (attraction: Attraction) => {
    console.log("Seleccionando atracción:", attraction.id)
    setSelectedAttraction(attraction)
    setActiveTab("info")
    setShowDetailsPanel(true)

    // Guardar en localStorage para persistencia
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedAttractionId", attraction.id)
      localStorage.setItem("showDetailsPanel", "true")
    }
  }

  // Función para simular la carga de fotos de Google Maps
  const loadGooglePhotos = (attractionId: string) => {
    // Si la atracción ya tiene fotos cargadas, no hacemos nada
    const attraction = attractionsData.find((a) => a.id === attractionId)
    if (attraction && attraction.googlePhotos) {
      return
    }

    // Actualizar el estado para mostrar que estamos cargando fotos
    if (selectedAttraction && selectedAttraction.id === attractionId) {
      setSelectedAttraction({
        ...selectedAttraction,
        googlePhotosLoading: true,
        googlePhotos: undefined,
      })
    }

    // Simular una carga asíncrona
    setTimeout(() => {
      // Generar fotos aleatorias simuladas
      const simulatedPhotos = Array.from({ length: 4 }).map((_, index) => ({
        url: `/placeholder.svg?height=400&width=400&text=Foto+${index + 1}+de+Google+Maps`,
        author: `Usuario de Google ${index + 1}`,
      }))

      // Actualizar el estado con las fotos cargadas
      if (selectedAttraction && selectedAttraction.id === attractionId) {
        setSelectedAttraction({
          ...selectedAttraction,
          googlePhotosLoading: false,
          googlePhotos: simulatedPhotos,
        })
      }
    }, 1500) // Simular un retraso de 1.5 segundos
  }

  // Efecto para recuperar la atracción seleccionada al cargar la página
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAttractionId = localStorage.getItem("selectedAttractionId")
      const savedShowPanel = localStorage.getItem("showDetailsPanel")

      if (savedAttractionId) {
        const attraction = attractionsData.find((a) => a.id === savedAttractionId)
        if (attraction) {
          setSelectedAttraction(attraction as Attraction)
          if (savedShowPanel === "true") {
            setShowDetailsPanel(true)
          }
        }
      }
    }
  }, [])

  // Efecto para cargar fotos de Google Maps cuando se selecciona una atracción
  useEffect(() => {
    if (selectedAttraction && activeTab === "gallery") {
      // Si no tiene fotos de Google y no está cargando, iniciar la carga
      if (!selectedAttraction.googlePhotos && !selectedAttraction.googlePhotosLoading) {
        loadGooglePhotos(selectedAttraction.id)
      }
    }
  }, [selectedAttraction, activeTab])

  // Definir la función global para ser accesible desde cualquier parte
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.showAttractionDetails = (attractionId: string) => {
        console.log("showAttractionDetails llamado con ID:", attractionId)
        const attraction = attractionsData.find((a) => a.id === attractionId)
        if (attraction) {
          handleSelectAttraction(attraction as Attraction)
        }
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        delete window.showAttractionDetails
      }
    }
  }, [])

  return (
    <AttractionContext.Provider
      value={{
        selectedAttraction,
        setSelectedAttraction,
        activeCategory,
        setActiveCategory,
        activeTab,
        setActiveTab,
        showDetailsPanel,
        setShowDetailsPanel,
        handleSelectAttraction,
        loadGooglePhotos,
      }}
    >
      {children}
    </AttractionContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export function useAttractions() {
  const context = useContext(AttractionContext)
  if (context === undefined) {
    throw new Error("useAttractions debe ser usado dentro de un AttractionProvider")
  }
  return context
}

// Extender el objeto Window para incluir nuestra función personalizada
declare global {
  interface Window {
    showAttractionDetails: (attractionId: string) => void
  }
}
