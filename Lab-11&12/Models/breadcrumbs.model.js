//Modulo de BreadCrumbs

exports.getBreadcrumbs = (page) => {
    const dictionary = {
        'forms': [
            { name: "Shop", url: "/" },
            { name: "Charlie's Portafolio", url: "/port/main"},
            {name: 'LabsHub', url: '/labsHTMLs/LabHub.html'},
            {name: 'forms', url: ''}
        ],
        'shop': [ { name: "Charlie's Portafolio", url: "/port/main"},
                  {name: "Comment Section", url: "/shop/forms"},
                  {name: 'LabsHub', url: '/labsHTMLs/LabHub.html'},
        		  {name: 'shop', url: ''}


         ],
         'port': [
        {name: "Shop", url: "/"},
        {name: "Comment Section", url: "/shop/forms"},
        {name: 'LabsHub', url: '/labsHTMLs/LabHub.html'},
        {name: "Charlie's Portafolio", url: "/port/main"}
   		]
    };
    return dictionary[page] || [];
};