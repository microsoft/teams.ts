import { IAdaptiveCard } from "@microsoft/teams.cards";

export const sampleCard: IAdaptiveCard = {
  type: "AdaptiveCard",
  version: "1.5",
  body: [
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          width: "stretch",
          items: [
            {
              type: "TextBlock",
              text: "Fourth Coffee Distillery Equipment ",
              size: "Large",
              weight: "Bolder",
              wrap: true,
            },
          ],
          verticalContentAlignment: "Center",
        },
        {
          type: "Column",
          targetWidth: "atLeast:Standard",
          width: "auto",
          items: [
            {
              type: "TextBlock",
              text: "Status",
              wrap: true,
              size: "Small",
              weight: "Default",
              isSubtle: true,
            },
            {
              type: "TextBlock",
              text: "In Progress",
              color: "Good",
              spacing: "None",
              size: "Small",
              weight: "Bolder",
              wrap: true,
            },
          ],
          spacing: "Small",
        },
        {
          type: "Column",
          targetWidth: "atLeast:Standard",
          width: "auto",
          separator: true,
          items: [
            {
              type: "TextBlock",
              text: "Opportunity Score",
              size: "Small",
              weight: "Default",
              isSubtle: true,
              wrap: true,
            },
            {
              type: "TextBlock",
              text: "91 - Grade A",
              wrap: true,
              weight: "Bolder",
              spacing: "None",
              size: "Small",
              color: "Default",
            },
          ],
        },
      ],
    },
    {
      type: "TextBlock",
      text: "Opportunity",
      wrap: true,
      isSubtle: true,
      spacing: "None",
    },
    {
      type: "TextBlock",
      targetWidth: "atMost:Narrow",
      text: "In Progress",
      color: "Good",
      weight: "Bolder",
      wrap: true,
    },
    {
      type: "TextBlock",
      targetWidth: "atMost:Narrow",
      text: "91 - Grade A",
      wrap: true,
      weight: "Bolder",
      spacing: "None",
      color: "Default",
    },
    {
      type: "Table",
      targetWidth: "Narrow",
      columns: [
        {
          width: 2,
        },
        {
          width: 3,
        },
      ],
      rows: [
        {
          type: "TableRow",
          cells: [
            {
              type: "TableCell",
              items: [
                {
                  type: "TextBlock",
                  text: "Account",
                  wrap: true,
                  isSubtle: true,
                },
              ],
            },
            {
              type: "TableCell",
              items: [
                {
                  type: "TextBlock",
                  text: "Fourth Coffee",
                  wrap: true,
                },
              ],
            },
          ],
          verticalCellContentAlignment: "Center",
        },
        {
          type: "TableRow",
          cells: [
            {
              type: "TableCell",
              items: [
                {
                  type: "TextBlock",
                  text: "Est. Revenue",
                  wrap: true,
                  isSubtle: true,
                },
              ],
            },
            {
              type: "TableCell",
              items: [
                {
                  type: "TextBlock",
                  text: "$3,000,000.00",
                  wrap: true,
                },
              ],
            },
          ],
          verticalCellContentAlignment: "Center",
        },
        {
          type: "TableRow",
          cells: [
            {
              type: "TableCell",
              items: [
                {
                  type: "TextBlock",
                  text: "Owner",
                  wrap: true,
                  isSubtle: true,
                },
              ],
            },
            {
              type: "TableCell",
              items: [
                {
                  type: "ColumnSet",
                  columns: [
                    {
                      type: "Column",
                      width: "auto",
                      items: [
                        {
                          type: "Image",
                          url: "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Card-Samples/main/samples/account/assets/avatar_small.png",
                          width: "20px",
                        },
                      ],
                      verticalContentAlignment: "Center",
                    },
                    {
                      type: "Column",
                      width: "stretch",
                      items: [
                        {
                          type: "TextBlock",
                          text: "Reta Taylor",
                          wrap: true,
                        },
                      ],
                      spacing: "Small",
                      verticalContentAlignment: "Center",
                    },
                  ],
                },
              ],
            },
          ],
          verticalCellContentAlignment: "Center",
        },
      ],
      firstRowAsHeaders: false,
      showGridLines: false,
      spacing: "Large",
      separator: true,
    },
    {
      type: "Container",
      separator: true,
      targetWidth: "VeryNarrow",
      items: [
        {
          type: "TextBlock",
          text: "Account",
          wrap: true,
          isSubtle: true,
        },
        {
          type: "TextBlock",
          text: "Fourth Coffee",
          wrap: true,
          spacing: "None",
        },
        {
          type: "TextBlock",
          text: "Est. Revenue",
          wrap: true,
          isSubtle: true,
        },
        {
          type: "TextBlock",
          text: "$3,000,000.00",
          wrap: true,
          spacing: "None",
        },
        {
          type: "TextBlock",
          text: "Owner",
          wrap: true,
          isSubtle: true,
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "auto",
              items: [
                {
                  type: "Image",
                  url: "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Card-Samples/main/samples/account/assets/avatar_small.png",
                  width: "20px",
                },
              ],
              verticalContentAlignment: "Center",
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "Reta Taylor",
                  wrap: true,
                },
              ],
              spacing: "Small",
              verticalContentAlignment: "Center",
            },
          ],
          spacing: "None",
        },
      ],
    },
    {
      type: "ColumnSet",
      targetWidth: "atLeast:Standard",
      columns: [
        {
          type: "Column",
          width: 20,
          items: [
            {
              type: "TextBlock",
              text: "Account",
              wrap: true,
              isSubtle: true,
            },
            {
              type: "TextBlock",
              text: "Fabrikam",
              wrap: true,
              spacing: "None",
            },
          ],
        },
        {
          type: "Column",
          width: 25,
          items: [
            {
              type: "TextBlock",
              text: "Est. Revenue",
              wrap: true,
              isSubtle: true,
            },
            {
              type: "TextBlock",
              text: "$3,000,000.00",
              wrap: true,
              spacing: "None",
            },
          ],
        },
        {
          type: "Column",
          width: 25,
          items: [
            {
              type: "TextBlock",
              text: "Owner",
              wrap: true,
              isSubtle: true,
            },
            {
              type: "ColumnSet",
              columns: [
                {
                  type: "Column",
                  width: "auto",
                  items: [
                    {
                      type: "Image",
                      url: "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Card-Samples/main/samples/account/assets/avatar_small.png",
                      width: "20px",
                    },
                  ],
                  verticalContentAlignment: "Center",
                },
                {
                  type: "Column",
                  width: "stretch",
                  items: [
                    {
                      type: "TextBlock",
                      text: "Reta Taylor",
                      wrap: true,
                    },
                  ],
                  spacing: "Small",
                  verticalContentAlignment: "Center",
                },
              ],
              spacing: "None",
            },
          ],
        },
        {
          type: "Column",
          width: "stretch",
          items: [],
        },
      ],
      spacing: "Medium",
    },
    {
      type: "ColumnSet",
      separator: true,
      columns: [
        {
          type: "Column",
          width: "auto",
          verticalContentAlignment: "Center",
          items: [
            {
              type: "Image",
              url: "https://raw.githubusercontent.com/OfficeDev/Microsoft-Teams-Card-Samples/main/samples/account/assets/avatar_large.png",
              style: "Person",
              width: "35px",
            },
          ],
        },
        {
          type: "Column",
          width: "stretch",
          items: [
            {
              type: "TextBlock",
              text: "Mona Kane",
              wrap: true,
            },
            {
              type: "TextBlock",
              text: "Contact",
              wrap: true,
              spacing: "None",
              size: "Small",
              isSubtle: true,
            },
          ],
          verticalContentAlignment: "Center",
          spacing: "Small",
        },
        {
          type: "Column",
          width: "auto",
          items: [
            {
              type: "ColumnSet",
              columns: [
                {
                  type: "Column",
                  targetWidth: "atLeast:Narrow",
                  width: "auto",
                  items: [
                    {
                      type: "RichTextBlock",
                      id: "showMore1",
                      inlines: [
                        {
                          type: "TextRun",
                          text: "See more",
                          selectAction: {
                            type: "Action.ToggleVisibility",
                            targetElements: [
                              "showMore1",
                              "showLess1",
                              "showMore2",
                              "showLess2",
                              "chevronDown1",
                              "chevronUp1",
                              "chevronDown2",
                              "chevronUp2",
                              "moreText",
                            ],
                          },
                        },
                      ],
                    },
                    {
                      type: "RichTextBlock",
                      id: "showLess1",
                      isVisible: false,
                      inlines: [
                        {
                          type: "TextRun",
                          text: "See less",
                          selectAction: {
                            type: "Action.ToggleVisibility",
                            targetElements: [
                              "showMore1",
                              "showLess1",
                              "showMore2",
                              "showLess2",
                              "chevronDown1",
                              "chevronUp1",
                              "chevronDown2",
                              "chevronUp2",
                              "moreText",
                            ],
                          },
                        },
                      ],
                    },
                  ],
                  verticalContentAlignment: "Center",
                  rtl: false,
                },
                {
                  type: "Column",
                  targetWidth: "atLeast:Narrow",
                  width: "auto",
                  items: [
                    {
                      type: "Icon",
                      id: "chevronDown1",
                      name: "ChevronDown",
                      size: "xxSmall",
                      color: "Accent",
                      selectAction: {
                        type: "Action.ToggleVisibility",
                        targetElements: [
                          "showMore1",
                          "showLess1",
                          "showMore2",
                          "showLess2",
                          "chevronDown1",
                          "chevronUp1",
                          "chevronDown2",
                          "chevronUp2",
                          "moreText",
                        ],
                      },
                    },
                    {
                      type: "Icon",
                      id: "chevronUp1",
                      isVisible: false,
                      name: "ChevronUp",
                      size: "xxSmall",
                      color: "Accent",
                      selectAction: {
                        type: "Action.ToggleVisibility",
                        targetElements: [
                          "showMore1",
                          "showLess1",
                          "showMore2",
                          "showLess2",
                          "chevronDown1",
                          "chevronUp1",
                          "chevronDown2",
                          "chevronUp2",
                          "moreText",
                        ],
                      },
                    },
                  ],
                  verticalContentAlignment: "Bottom",
                  horizontalAlignment: "Center",
                  spacing: "None",
                },
              ],
            },
          ],
          verticalContentAlignment: "Center",
        },
      ],
      spacing: "ExtraLarge",
    },
    {
      type: "ColumnSet",
      targetWidth: "VeryNarrow",
      columns: [
        {
          type: "Column",
          width: "auto",
          items: [
            {
              type: "RichTextBlock",
              id: "showMore2",
              inlines: [
                {
                  type: "TextRun",
                  text: "See more",
                  selectAction: {
                    type: "Action.ToggleVisibility",
                    targetElements: [
                      "showMore1",
                      "showLess1",
                      "showMore2",
                      "showLess2",
                      "chevronDown1",
                      "chevronUp1",
                      "chevronDown2",
                      "chevronUp2",
                      "moreText",
                    ],
                  },
                },
              ],
            },
            {
              type: "RichTextBlock",
              id: "showLess2",
              isVisible: false,
              inlines: [
                {
                  type: "TextRun",
                  text: "See less",
                  selectAction: {
                    type: "Action.ToggleVisibility",
                    targetElements: [
                      "showMore1",
                      "showLess1",
                      "showMore2",
                      "showLess2",
                      "chevronDown1",
                      "chevronUp1",
                      "chevronDown2",
                      "chevronUp2",
                      "moreText",
                    ],
                  },
                },
              ],
            },
          ],
          verticalContentAlignment: "Center",
        },
        {
          type: "Column",
          width: "auto",
          items: [
            {
              type: "Icon",
              id: "chevronDown2",
              name: "ChevronDown",
              size: "xxSmall",
              color: "Accent",
              selectAction: {
                type: "Action.ToggleVisibility",
                targetElements: [
                  "showMore1",
                  "showLess1",
                  "showMore2",
                  "showLess2",
                  "chevronDown1",
                  "chevronUp1",
                  "chevronDown2",
                  "chevronUp2",
                  "moreText",
                ],
              },
            },
            {
              type: "Icon",
              id: "chevronUp2",
              name: "ChevronUp",
              isVisible: false,
              size: "xxSmall",
              color: "Accent",
              selectAction: {
                type: "Action.ToggleVisibility",
                targetElements: [
                  "showMore1",
                  "showLess1",
                  "showMore2",
                  "showLess2",
                  "chevronDown1",
                  "chevronUp1",
                  "chevronDown2",
                  "chevronUp2",
                  "moreText",
                ],
              },
            },
          ],
          verticalContentAlignment: "Bottom",
          horizontalAlignment: "Center",
          spacing: "None",
        },
      ],
      spacing: "Small",
    },
    {
      type: "TextBlock",
      id: "moreText",
      text: "More Info",
      isVisible: false,
    },
    {
      type: "ActionSet",
      separator: true,
      actions: [
        {
          type: "Action.OpenUrl",
          title: "View Details",
          url: "https://adaptivecards.microsoft.com/",
        },
      ],
      spacing: "ExtraLarge",
    },
  ],
};
