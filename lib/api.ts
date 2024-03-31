const API_URL = process.env.WORDPRESS_API_URL;
async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  if (!API_URL) {
    throw new Error('WordPress API URL is not defined');
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    },
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}
export async function getAllPortofoliosWithSlug() {
  const data = await fetchAPI(`
  query portofolios {
    portofolios {
      edges {
        node {
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          slug
          attachment {
            facebookUrl
            instagramUrl
            judulPostYoutube
            linkedInUrl
            youtubeUrl
            partners {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  `);
  return data?.portofolios;
}
export async function getPortofolioFront() {
  const data = await fetchAPI(`
  query portofolioFront {
    pages(where: {title: "portofolio"}) {
      edges {
        node {
          portofoliosFront {
            gambarKeahlian1 {
              node {
                sourceUrl
              }
            }
            gambarKeahlian2 {
              node {
                sourceUrl
              }
            }
            gambarKeahlian3 {
              node {
                sourceUrl
              }
            }
            gambarKeahlian4 {
              node {
                sourceUrl
              }
            }
            gambarKeahlian5 {
              node {
                sourceUrl
              }
            }
            gambarKeahlian6 {
              node {
                sourceUrl
              }
            }
            gambarKeahlian7 {
              node {
                sourceUrl
              }
            }
            keahlian1
            keahlian2
            keahlian3
            keahlian4
            keahlian5
            keahlian7
            keahlian6
            ketaranganKeahlian1
            ketaranganKeahlian2
            ketaranganKeahlian3
            ketaranganKeahlian4
            ketaranganKeahlian5
            ketaranganKeahlian6
            ketaranganKeahlian7
          }
          front {
            banner {
              node {
                sourceUrl
              }
            }
            judul
            subjudul
          }
        }
      }
    }
  }
  `);
  console.log('fungsi terpanggil, data:', data);

  if (data?.pages.edges[0]?.node?.portofoliosFront) {
    // console.log(data.pages.edges[0].node.portofoliosFront)
    console.log('api' ,data.pages.edges[0]);
    return data.pages.edges[0];
  }

  return null;
  
}




export async function getAllServicesWithSlug() {
  const data = await fetchAPI(
    `query Services {
      services {
        nodes {
          slug
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }`
  );
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  return data?.posts;
}
export async function getServices(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      post(id: "") {
        services {
          deskripsi
          fieldGroupName
          judul
          post
          servicesimage {
            sourceUrl
          }
        }
      }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    },
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

export async function getAllPages(preview) {
  const data = await fetchAPI(
    `
    query Pages {
      pages {
        nodes {
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  return data?.pages;
}


function convertUndefinedToNull(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj = {};
  for (const key in obj) {
    if (obj[key] === undefined) {
      newObj[key] = null;
    } else {
      newObj[key] = convertUndefinedToNull(obj[key]);
    }
  }
  return newObj;
}