// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        featuresTitle
        featuresSubtitle
        featuresItems {
          ... on ParagraphFeatureItem {
            id
            title
            description { processed }
            icon
          }
        }
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            featuresTitle
            featuresSubtitle
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description { processed }
                icon
              }
            }
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_SERVICES = gql`
  query GetServices($first: Int = 10) {
    nodeServices(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeService {
          body { processed summary }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
            body { processed summary }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_HEALTH_TIPS = gql`
  query GetHealthTips($first: Int = 10) {
    nodeHealthTips(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeHealthTip {
          body { processed summary }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          topic
        }
      }
    }
  }
`

export const GET_HEALTH_TIP_BY_PATH = gql`
  query GetHealthTipByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeHealthTip {
            id
            title
            path
            body { processed summary }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            topic
          }
        }
      }
    }
  }
`

export const GET_LOCATIONS = gql`
  query GetLocations($first: Int = 10) {
    nodeLocations(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeLocation {
          body { processed summary }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          address
          phone
          hours
        }
      }
    }
  }
`

export const GET_LOCATION_BY_PATH = gql`
  query GetLocationByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeLocation {
            id
            title
            path
            body { processed summary }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            address
            phone
            hours
          }
        }
      }
    }
  }
`
