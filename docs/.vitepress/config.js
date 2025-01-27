// .vitepress/config.js
export default {
  title: 'Tegar Sabila',
  description: 'Personal Portfolio of Tegar Sabila',

  themeConfig: {
    logo: "/me.png",
    siteTitle: "Tegar Sabila",
    nav: [
    { text: "Blog", link: "//blog.tegarsbl.my.id"},
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    ],
    
    socialLinks: [
    
      {
        icon: {
            svg: `<img src="/icons8-facebook-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://fb.me/tegarsabila11'
      },
        
      {
        icon: {
            svg: `<img src="/icons8-instagram-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://instagram.com/tegarsabila11'
      },
      {
        icon: {
             svg: `<img src="/icons8-whatsapp-100.png" alt="My Custom Icon" style="width: 32px; height: 32px;" />`
        },
        link: 'https://wa.me/6289518379453'
      },
    ],
     
    footer: {
   message: "Made with ❤️ by Tegar Sabila | Web Developer, Creative Artist & Designer",
   copyright: "© 2025-present Tegar Sabila. All rights reserved.",
 },
  },
}
