var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
];
function addPrefixToChildren(categories, prefix, level = 0) {
    var currentPrefix = prefix.repeat(level);

    for (var i = 0; i < categories.length; i++) {
        categories[i].name = currentPrefix + categories[i].name;

        if (categories[i].children) {
            addPrefixToChildren(categories[i].children, prefix, level + 1);
        }
    }
    return categories;
}

function convertCategoriesToHTML(categories) {
    var html = "";
    function addOptions(categories, prefix) {
        for (var i = 0; i < categories.length; i++) {
            html += "<option>" + prefix + categories[i].name + "</option>";
            if (categories[i].children) {
                addOptions(categories[i].children, prefix);
            }
        }
    }
    addOptions(categories, "");
    return html;
}

addPrefixToChildren(categories, "--|");
var htmlString = convertCategoriesToHTML(categories);

document.getElementById("category").innerHTML += htmlString;
