export const pageview = (url) => {
    window.gtag('config','G-9VQSKLFK0Y', {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }