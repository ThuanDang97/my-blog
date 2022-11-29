import { DEFAULT_HEADER_URL } from '@constants/router'
import { Document } from '@contentful/rich-text-types'

export const LOGO_TITLE = 'BEAUTYONCODE'

export const NAVIGATE_ITEM = [
  {
    id: 1,
    name: DEFAULT_HEADER_URL.HOME.TITLE,
    path: DEFAULT_HEADER_URL.HOME.URL,
  },
  {
    id: 2,
    name: DEFAULT_HEADER_URL.MOST_VIEW.TITLE,
    path: DEFAULT_HEADER_URL.MOST_VIEW.URL,
  },
  {
    id: 3,
    name: DEFAULT_HEADER_URL.BLOG.TITLE,
    path: DEFAULT_HEADER_URL.BLOG.URL,
  },
  {
    id: 4,
    name: DEFAULT_HEADER_URL.ABOUT.TITLE,
    path: DEFAULT_HEADER_URL.ABOUT.URL,
  },
  {
    id: 5,
    name: DEFAULT_HEADER_URL.SHORT_POST.TITLE,
    path: DEFAULT_HEADER_URL.SHORT_POST.URL,
  },
]

export const MOCK_DATA_HOME_PAGE = {
  fields: {
    author: 'Thuan Dang',
    image: {
      fields: {
        file: {
          url: 'url',
        },
      },
    },
    foreword: {
      content: [],
    },
  },
}

export const MOCK_WIDGET = {
  title: 'Categories',
  widgetsItem: [
    {
      name: 'Python',
      slug: 'python',
    },
    {
      name: 'JavaScript',
      slug: 'javascript',
    },
    {
      name: 'NextJS',
      slug: 'nextjs',
    },
    {
      name: 'Front-End',
      slug: 'front-end',
    },
    {
      name: 'Linux',
      slug: 'linux',
    },
    {
      name: 'CSS',
      slug: 'css',
    },
  ],
}

export const MOCK_DATA_CARD_POST = {
  image:
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  alt: 'CSS',
  headerContent: 'CSS',
  view: '300',
  href: '',
  shortContent: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'Chào mừng bạn đến với blog số 5 của series “Linux dành cho lập trình viên”. Trong các blog trước, mình đã đi qua các nội dung về: – “Giới thiệu về Linux” – “Làm quen câu lệnh và hệ thống tập tin…\n',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  } as unknown as Document,
}

export const MOCK_NAVIGATE = {
  navItems: [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Most View',
      path: '/most-view',
    },
    {
      id: 3,
      name: 'Blog',
      path: '/blog',
    },
    {
      id: 4,
      name: 'About',
      path: '/about',
    },
  ],
}

export const MOCK_CATEGORY_ITEMS = [
  {
    name: 'All',
    slug: 'blog',
  },
  {
    name: 'Programming',
    slug: 'category/programming',
  },
  {
    name: 'Short Posts',
    slug: 'category/short-posts',
  },
  {
    name: 'Most Views',
    slug: 'category/most-views',
  },
]

export const MOCK_DATA_PAGE = [
  {
    fields: {
      title: 'Các bài viết ngắn – phần 1',
      slug: 'cac-bai-viet-ngan-phan-1',
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '.gitkeep File <strong>.gitkeep</strong> thường được biết đến như là cách để có thể commit một thư mục trống lên trong quá trình thiết kế cấu trúc thư mục cho dự án của bạn. Ví dụ cấu trúc một website đơn…\n\n',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      heroImage: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'ont2c8ajcvde',
            },
          },
          id: '6llpDgAKQDU0CzC8qJWeFh',
          type: 'Asset',
          createdAt: '2022-11-17T03:54:58.616Z',
          updatedAt: '2022-11-17T03:54:58.616Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'food-2203732 1280',
          description: '',
          file: {
            url: '//images.ctfassets.net/ont2c8ajcvde/6llpDgAKQDU0CzC8qJWeFh/c31582e70f63c105e9c64f06b55af3cc/food-2203732_1280.png',
            details: {
              size: 270722,
              image: {
                width: 1280,
                height: 853,
              },
            },
            fileName: 'food-2203732_1280.png',
            contentType: 'image/webp',
          },
        },
      },
      content: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '.gitkeep',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'File ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '.gitkeep',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' thường được biết đến như là cách để có thể commit một thư mục trống lên trong quá trình thiết kế cấu trúc thư mục cho dự án của bạn.Ví dụ cấu trúc một website đơn giản:',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [
                  {
                    type: 'code',
                  },
                ],
                value:
                  'src/\n|-- assets/\n  |-- images/\n|-- styles/\n  |-- main.css\nindex.html\n[README.md](<http://readme.md/>)',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '\nNếu không có .gitkeep trong thư mục “images” thì mình không thể commit cả hai thư mục “assets” và “images” lên repo được, kết quả là không giữ được cấu trúc thư mục như trên(hình 1)Và đây là kết quả khi đặt .gitkeep trong thư mục “images”, cấu trúc thư mục sẽ được đảm bảo(hình 2)Câu hỏi đặt ra là: tại sao lại là .gitkeep? Có thể dùng file khác thay thế được không?Trả lời: ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'CÓ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' thể dùng file khác thay thế! Ví dụ: text.txt hay thậm chí là .gitignoreTuy nhiên vì mục đích của file này là giữ cho một thư mục có thể trống, theo nghĩa đen của nó, nên theo cách làm tiêu chuẩn sẽ là một file có đủ ý nghĩa trên:– .gitkeep là file ẩn– .gitkeep mang ý nghĩa đúng với vai trò của nóHi vọng bạn sẽ nhớ đến .gitkeep khi cần commit thư mục trống và hiểu thêm vì sao lại dùng bạn ấy nhé! Cơ mà nói chứ bạn sẽ ít xài lắm, vì thư mục có khi nào trống đâu haha.Bài viết gốc nằm trên blog của mình ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/gitkeep/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      view: 380,
      categories: ['short-posts', 'blog'],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'ont2c8ajcvde',
        },
      },
      id: '11BbemYYQxoxV9QDhDH5eN',
      type: 'Entry',
      createdAt: '2022-11-17T03:55:05.969Z',
      updatedAt: '2022-11-17T03:55:05.969Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'blogPost',
        },
      },
      locale: 'en-US',
    },
  },
  {
    fields: {
      title: 'Các bài viết ngắn – phần 2',
      slug: 'cac-bai-viet-ngan-phan-2',
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '.gitkeep File <strong>.gitkeep</strong> thường được biết đến như là cách để có thể commit một thư mục trống lên trong quá trình thiết kế cấu trúc thư mục cho dự án của bạn. Ví dụ cấu trúc một website đơn…\n\n',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      heroImage: {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'ont2c8ajcvde',
            },
          },
          id: '6llpDgAKQDU0CzC8qJWeFh',
          type: 'Asset',
          createdAt: '2022-11-17T03:54:58.616Z',
          updatedAt: '2022-11-17T03:54:58.616Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'food-2203732 1280',
          description: '',
          file: {
            url: '//images.ctfassets.net/ont2c8ajcvde/6llpDgAKQDU0CzC8qJWeFh/c31582e70f63c105e9c64f06b55af3cc/food-2203732_1280.png',
            details: {
              size: 270722,
              image: {
                width: 1280,
                height: 853,
              },
            },
            fileName: 'food-2203732_1280.png',
            contentType: 'image/webp',
          },
        },
      },
      content: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '.gitkeep',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'File ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '.gitkeep',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' thường được biết đến như là cách để có thể commit một thư mục trống lên trong quá trình thiết kế cấu trúc thư mục cho dự án của bạn.Ví dụ cấu trúc một website đơn giản:',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [
                  {
                    type: 'code',
                  },
                ],
                value:
                  'src/\n|-- assets/\n  |-- images/\n|-- styles/\n  |-- main.css\nindex.html\n[README.md](<http://readme.md/>)',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '\nNếu không có .gitkeep trong thư mục “images” thì mình không thể commit cả hai thư mục “assets” và “images” lên repo được, kết quả là không giữ được cấu trúc thư mục như trên(hình 1)Và đây là kết quả khi đặt .gitkeep trong thư mục “images”, cấu trúc thư mục sẽ được đảm bảo(hình 2)Câu hỏi đặt ra là: tại sao lại là .gitkeep? Có thể dùng file khác thay thế được không?Trả lời: ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'CÓ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' thể dùng file khác thay thế! Ví dụ: text.txt hay thậm chí là .gitignoreTuy nhiên vì mục đích của file này là giữ cho một thư mục có thể trống, theo nghĩa đen của nó, nên theo cách làm tiêu chuẩn sẽ là một file có đủ ý nghĩa trên:– .gitkeep là file ẩn– .gitkeep mang ý nghĩa đúng với vai trò của nóHi vọng bạn sẽ nhớ đến .gitkeep khi cần commit thư mục trống và hiểu thêm vì sao lại dùng bạn ấy nhé! Cơ mà nói chứ bạn sẽ ít xài lắm, vì thư mục có khi nào trống đâu haha.Bài viết gốc nằm trên blog của mình ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/gitkeep/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      view: 380,
      categories: ['short-posts', 'blog'],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'ont2c8ajcvde',
        },
      },
      id: '11BbemYYQxoxV9QDhDH5eN',
      type: 'Entry',
      createdAt: '2022-11-17T03:55:05.969Z',
      updatedAt: '2022-11-17T03:55:05.969Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'blogPost',
        },
      },
      locale: 'en-US',
    },
  },
]

export const MOCK_DATA_ABOUT_PAGE = [
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'ont2c8ajcvde',
        },
      },
      id: '5LoRwWs2ZwjaYn8ptF3v2j',
      type: 'Entry',
      createdAt: '2022-11-17T09:08:08.574Z',
      updatedAt: '2022-11-17T09:12:43.422Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 3,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'author',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'Thanh Nguyễn',
      blog: 'beautyoncode',
      avatar: [
        {
          url: 'https://images.ctfassets.net/ont2c8ajcvde/2q42Qytnxy63qAgEQgSG67/7ad54dfe423bf8253b7e2094ece12262/avatar.png',
        },
      ],
      introduceYourself: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Xin chào, tôi là ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                  {
                    type: 'bold',
                  },
                ],
                value: 'Thanh Nguyễn (Nguyễn Diễm Thanh)',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: ' – tác giả của blog ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '.Tôi sinh ra và lớn lên ở Đà Nẵng và hiện cũng đang sống và làm việc tại đây. Tôi từng nghĩ mình sẽ trở thành nhà thiết kế đồ họa nhưng nghề lập trình đã chọn mình. Hiện tôi đang làm ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'Web Developer tại ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.agilityio.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'AgilityIO',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' một công ty có văn phòng ở NewYork, Mỹ và đội ngũ phát triển ở Việt Nam. Nếu bạn muốn tìm hiểu thêm về công ty này, có thể xem thêm các video: ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.youtube.com/watch?v=EwOuGsrYmGA',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'AgilityIO',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.youtube.com/watch?v=ci9QZbNLct0',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'Life At AgilityIO',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: '. ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  'Công việc \bcủa tôi xoay quanh việc lập trình, sử dụng công nghệ như một giải pháp \u001dcùng khách hàng của mình tạo ra các sản phẩm tốt cho người dùng.  ',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Trong quá trình học lập trình từ con số 0 của mình, tôi nhận ra nhiều điều thú vị, tôi đã nhìn lập trình ở góc nhìn của một người thiết kế sản phẩm(designer), của một người phân tích sản phẩm(business analyst) và của người dùng(user). Tôi thấy bản thân họ là mình và mình cũng là họ, chúng tôi có những mối tương quan sâu sắc và có cùng một mục tiêu, là sử dụng công nghệ để giải quyết các vấn đề. Lập trình rõ là không dễ, và tôi thích đều đó, tôi thích tính chất của công việc này, đó là sự thay đổi không ngừng, sự học không ngừng nghỉ và nó dạy cho tôi thật nhiều về sự khiêm tốn.\nTrong cuộc sống, tôi cũng đang có một hành trình vô cùng thú vị, từ một con bé tomboy cá tính trở thành một người phụ nữ lập gia đình và có con. Tôi cũng đã nuôi một ước mơ từ thời sinh viên là vừa có thể kiếm tiền trang trải cuộc sống vừa có thể được làm thiện nguyện cống hiến cho cộng đồng, có thể là làm cho một tổ chức phi chính phủ với công việc gì đó chẳng hạn. Tuy đã lâu chưa từng nhắc đến, nhưng nó vẫn cứ ở trong mình, đây cũng là lý do tôi chọn làm ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'tình nguyện viên cho',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: ' ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://steamforvietnam.org/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'STEAM for Viet Nam',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' khi đủ duyên đến.Về viết lách, tôi bắt đầu viết từ rất lâu rồi, từ cấp ba tôi đã có cuốn truyện riêng của mình tự viết, nhưng đã bị thất lạc. Tôi thỉnh thoảng rất hay thích viết cho mình, như là một cách để rà soát và cảm nhận, nhưng chưa từng nghiêm túc viết. Sau khi đọc cuốn ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/sach-khi-hoi-tho-hoa-thinh-khong-paul-kalanithi/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: '“Khi hơi thở hoá thinh không”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', tôi thấy cuộc sống quả là vô thường và bắt đầu suy nghĩ nghiêm túc hơn cho một nơi mà tôi có thể được sống với chính mình, tự học mà không bị ai bắt ép và có thể thoả mái chia sẻ với mình và với mọi người. Đây cũng là các đề tài chủ yếu của blog ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '.Sau khi tạm chia tay STEAM for Viet Nam, tôi bắt đầu viết tự do nhiều hơn và hiện đang cộng tác cùng ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://careerly.vn/profiles/1140',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: 'Careerly',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', là ứng dụng kết nối mạng lưới người Việt làm tại các công ty công nghệ, nơi mình chia sẻ đến bạn đọc các bài viết ngắn về tech.\nBạn có thể liên hệ với tôi qua email beautyoncode@gmail.com hoặc ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.facebook.com/beautyoncode/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'fanpage BeautyOnCode',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      introduceBlog: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' là blog viết về lập trình và về những câu chuyện trong cuộc sống của tôi (Thanh) với các đề tài như ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/lap-trinh/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'lập trình',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/hanh-trinh-cua-toi/yeu-ban-than/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'làm blog',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/hanh-trinh-cua-toi/yeu-ban-than/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'hành trình phát triển bản thân',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', … Hiện BeautyOnCode đang có gần 90 bài viết, bấm vào ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/most-views/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: '“Xem Nhiều Nhất”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' để đọc các bài viết được đọc giả đọc nhiều nhất. Bạn cũng có thể ghé ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/muc-luc/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: '“Mục lục”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' để xem các bài viết được chia theo các chuỗi bài cho từng loại chủ đề (Python, Linux, JavaScript, Leetcode, …). Bên cạnh đó, hơn 62 bài viết ở mục ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/short-posts/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: '“Bài Viết Ngắn”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', là những góc nhìn về công nghệ, giới thiệu các tin tức, nguồn tài liệu, … Và cuối cùng là một ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/podcast/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'podcast',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' với hơn 60 episodes về các bài viết tự do, các bài viết từ blog khác và sách.Về ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'italic',
                  },
                ],
                value: 'tên blog này',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: ', nó có nhiều ý nghĩa khác nhau. Trước hết, “',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '” là bút danh tôi tự đặt cho mình, cho nó ngầu ấy mà, ý là một người phụ nữ trong ngành lập trình, tôi muốn viết về trải nghiệm của mình trong lĩnh vực này. Ngoài ra, “',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '” còn có ý nghĩa là nét đẹp của code nữa, tôi thấy nó đẹp vì nghề này, không mang nghiệp nặng gì, chỉ đơn thuần là làm việc trên máy tính, tôi còn thấy đa phần mọi người làm trong ngành đến hướng thiện, đều là những người tốt nên tôi thấy danh xưng này rất là xứng đáng.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Nếu bạn yêu thích BeautyOnCode, bạn có thể đăng ký theo dõi blog ở form bên dưới hoặc trang ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'http://eepurl.com/hJr_g9',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', hoặc follow ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.facebook.com/beautyoncode/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'fanpage',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' này nha.Bạn cũng có thể cùng mình duy trì blog này bằng cách ủng hộ mình ở trang ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/support/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Support Me',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '.',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: 'Chúc bạn một ngày tốt lành!',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: 'Thanh Nguyễn',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      description:
        'Cám ơn bạn đã ghé thăm blog BeautyOnCode! Hãy để tôi làm quen với bạn bằng câu chuyện của tôi và của blog này bằng lời kể của mình nha.',
    },
  },
]
