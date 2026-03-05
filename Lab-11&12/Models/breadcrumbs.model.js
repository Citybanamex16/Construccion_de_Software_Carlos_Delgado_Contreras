//Modulo de BreadCrumbs

exports.getBreadcrumbs = (page) => {
    const dictionary = {
        'forms': [
            { name: "Shop", url: "/" },
            { name: "Labs", url: "/port/labs" },
            { name: "Charlie's", url: "/port/main"}
        ],
        'shop': [ { name: "Home", url: "/" },
        		  {name: ''}


         ],
         'port': [
        {name: "Shop", url: "/"},
        {name: "Comment Section", url: "/shop/forms"},
        {name: "labs", url: "/port/labs"}
   		]
    };
    return dictionary[page] || [];
};