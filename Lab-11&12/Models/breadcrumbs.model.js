//Modulo de BreadCrumbs

exports.getBreadcrumbs = (page) => {
    const dictionary = {
        'forms': [
            { name: "Shop", url: "/" },
            { name: "Labs", url: "/port/labs" },
            { name: "Charlie's", url: "/port/main"},
            {name: 'LabsHub', url: '/labsHTMLs/LabHub.html'},
            {name: 'forms', url: ''}
        ],
        'shop': [ { name: "Charlie's", url: "/port/main"},
                  {name: "Comment Section", url: "/shop/forms"},
                  {name: 'LabsHub', url: '/labsHTMLs/LabHub.html'},
        		  {name: 'shop', url: ''}


         ],
         'port': [
        {name: "Shop", url: "/"},
        {name: "Comment Section", url: "/shop/forms"},
        {name: "labs", url: "/port/labs"},
        {name: 'port', url: ''}
   		]
    };
    return dictionary[page] || [];
};