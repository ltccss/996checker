var _hourConfig = 
{
    "20":
    {
        gravity: 1, // 权重
        color: "#ffee2e",
        overnight : false, // 是否过夜
    },
    "21":
    {
        gravity: 2,
        color: "#ffac36",
        overnight : false,
    },
    "22":
    {
        gravity: 3,
        color: "#ffac36",
        overnight : false,
    },
    "23":
    {
        gravity: 4,
        color: "#ff5400",
        overnight : false,
    },
    "0":
    {
        gravity: 5,
        color: "#ff1515",
        overnight : true,
    },
    "1":
    {
        gravity: 6,
        color: "#ff156d",
        overnight : true,
    },
    "2":
    {
        gravity: 7,
        color: "#c40098",
        overnight : true,
    },
    "3":
    {
        gravity: 8,
        color: "#410032",
        overnight : true,
    },
    "4":
    {
        gravity: 9,
        color: "#410032",
        overnight : true,
    },
    "5":
    {
        gravity: 10,
        color: "#410032",
        overnight : true,
    },
    "6":
    {
        gravity: 11,
        color: "#000000",
        overnight : true,
    },
    "7":
    {
        gravity: 12,
        color: "#000000",
        overnight : true,
    },
    "8":
    {
        gravity: 13,
        color: "#000000",
        overnight : true,
    },

    // customFunc : function (hour)
    // {
    //     // 这里hour为浮点数
    //     return {
    //         gravity: 12,
    //         color: "#000000",
    //         overnight : false,
    //     }
    // }
}

var _holidayConfig = 
{
    extraHoliday: // 除周末外的额外假期
    {
        "2018": 
        {
            "12" : [30,31],
        },
        "2019":
        {
            "1": [1],
            "2": [4, 5, 6, 7, 8, 9, 10],
            "4": [5, 6, 7],
            "5": [1, 2, 3, 4],
            "6": [7, 8, 9],
            "9": [13, 14, 15],
            "10": [1,2,3,4,5,6,7],
        }
    },
    extraWorkingDay: // 需要工作的周末
    {
        "2018":
        {
            "12": [29],
        },
        "2019":
        {
            "2": [2, 3],
            "4": [28],
            "5": [5],
            "9": [29],
            "10": [12],
        }
    },
    weekend: [0, 6],
    color : "#00ff0c"
}

// 需要排除的作者名字
var _excludeAuthors = 
[
    // "admin",
]