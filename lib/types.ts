
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
export interface DrupalService {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  summary?: { processed: string; summary?: string }
  availability?: string
  insuranceAccepted?: string
  serviceCategory?: string
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

export interface DrupalHealthTip {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  summary?: { processed: string; summary?: string }
  topic?: string
  authorName?: string
  publishedDate?: { timestamp: string }
}

export interface HealthTipsData {
  nodeHealthTips: {
    nodes: DrupalHealthTip[]
  }
}

export interface DrupalLocation {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  address?: string
  city?: string
  stateProvince?: string
  postalCode?: string
  phone?: string
  fax?: string
  hours?: { processed: string; summary?: string }
  servicesAvailable?: string
  hasDriveThrough?: string
  pharmacistName?: string
}

export interface LocationsData {
  nodeLocations: {
    nodes: DrupalLocation[]
  }
}
