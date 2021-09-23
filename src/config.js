// config.js
module.exports = {
    github: {
        username: 'sheeraz1022', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'sheerazshaikh',
        twitter: 'sheerazpetarian',
        facebook: 'sheeraz1022',
        dribbble: '',
        behance: '',
        medium: 'sheerazpetarian',
        devto: '',
        website: 'https://sheerazshaikh.com',
        phone: '',
        email: 'sheeraz.shaikh@outlook.com'
    },
    skills: [
        'JavaScript',
        'React Js',
        'Node Js',
        'Next Js',
        'CSS',
        'AWS',
        'Docker'
    ],
    experiences: [
        { 
            company: 'IProperty Sdn Bhd',
            position: 'Senior Developer',
            from: 'July 2020',
            to: 'Present'
        },
        { 
            company: 'Miracletek Pvt Ltd',
            position: 'Senior Software Engineer',
            from: 'July 2016',
            to: 'November 2019'
        },
        { 
            company: 'Goodcore Software Sdn Bhd',
            position: 'System Analyst / Senior Developer',
            from: 'November 2014',
            to: 'July 2016'
        },
        { 
            company: 'Folio3 Pvt Ltd',
            position: 'Senior Software Engineer',
            from: 'January 2013',
            to: 'November 2014'
        },
        { 
            company: 'Folio3 Pvt Ltd',
            position: 'Software Engineer',
            from: 'July 2010',
            to: 'December 2012'
        }
    ],
    education: [
        { 
            institution: 'FAST NUCES Karachi',
            degree: 'BS Computer Science',
            from: '2006',
            to: '2010'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'medium', // medium | dev.to
        username: 'sheerazpetarian',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'test' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}