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
export async function getAllPhotos() {
  const data = await fetchAPI(`
 query gallery {
  gallery {
    edges {
      node {
        content
        title
        slug
        galleryAttachment {
          caption
          facebook
          instagram
          linkedin
          x
          youtube
          size
          image {
            node {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
  `);

  return data?.gallery;
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
export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
  query portofolios {
    pages {
      edges {
        node {
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          slug
          }
        }
      }
    }
  
  `);
  return data?.pages;
}
export async function getPortofolioFront() {
  const data = await fetchAPI(`
  query portofolioFront {
    pages(where: {name: "portofolio"}) {
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
export async function getServicesFront() {
  const data = await fetchAPI(`
  query services {
    pages(where: {name: "service"}) {
      edges {
        node {
          front {
            banner {
              node {
                sourceUrl
              }
            }
            judul
            subjudul
          }
          content
          servicesFront {
          heading
          shortParagraph
        }
        }
      }
    }
  }
  `);
  console.log('fungsi terpanggil, data:', data);

  if (data?.pages.edges[0]?.node?.front) {
    // console.log(data.pages.edges[0].node.portofoliosFront)
    console.log('api services front' ,data.pages.edges[0]);
    return data.pages.edges[0];
  } else {
    return null;

  }

  
  
}
export async function getHomeFront() {
  const data = await fetchAPI(`
  query homeFront {
  pages(where: {name: "beranda"}) {
    edges {
      node {
        highlightPosts {
          highlightPost {
            edges {
              node {
                slug
                ... on Portofolio {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Post {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Service {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
          highlightPost2 {
            edges {
              node {
                slug
                ... on Portofolio {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Post {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Service {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
          highlightPost3 {
            edges {
              node {
                slug
                ... on Portofolio {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Post {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Service {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
          highlightPost4 {
            edges {
              node {
                slug
                ... on Portofolio {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Post {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
                ... on Service {
                  id
                  title
                  slug
                  content
                  excerpt
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
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
        previewTexts {
          mainPreview
          mainPreviewHead
          mainPreviewLink
          previewHead1
          previewLink1
          previewText1
          previewHead2
          previewHead3
          previewHead4
          previewLink2
          previewLink3
          previewLink4
          previewText2
          previewText3
          previewText4
        }
      }
    }
  }
}
  `);
  console.log('fungsi terpanggil, data:', data);

  if (data?.pages.edges[0]?.node?.front) {
    // console.log(data.pages.edges[0].node.portofoliosFront)
    console.log('api home front' ,data.pages.edges[0]);
    return data.pages.edges[0];
  } else {
    return null;

  }

  
  
}

export async function getGalleryFront() {
  const data = await fetchAPI(`
  query gallery {
    pages(where: {name: "gallery"}) {
      edges {
        node {
          front {
            banner {
              node {
                sourceUrl
              }
            }
            judul
            subjudul
          }
          content
          
        }
      }
    }
  }
  `);
  console.log('fungsi terpanggil, data:', data);

  if (data?.pages.edges[0]?.node?.front) {
    // console.log(data.pages.edges[0].node.portofoliosFront)
    console.log('api services front' ,data.pages.edges[0]);
    return data.pages.edges[0];
  } else {
    return null;

  }

  
  
}

export async function getContactFront() {
  const data = await fetchAPI(`
  query contact {
  pages(where: {name: "contact-us"}) {
    edges {
      node {
        contact {
          alamat
          email
          telepon
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

  if (data?.pages.edges[0]?.node?.front) {
    // console.log(data.pages.edges[0].node.portofoliosFront)
    console.log('api services front' ,data.pages.edges[0]);
    return data.pages.edges[0];
  } else {
    return null;

  }

  
  
}




export async function getAllServicesWithSlug() {
  const data = await fetchAPI(
    `
    query services {
      services {
        edges {
          node {
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
          }
        }
      }
    }
    `
  );
  console.log('all services',data.services)
  return data?.services;
}
export async function getTeams() {
  const data = await fetchAPI(
    `
    query Teams {
  teams (where: {}, first: 100) {
    edges {
      node {
        content
        teamMemberData {
          group
          facebook
          instagram
          jabatan
          linkedIn
          nama
          x
          foto {
            node {
              sourceUrl
            }
          }
        }
        title
      }
    }
  }
}
    `
  );
  console.log('all team member', data?.teams)
  return data?.teams;
}export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20000, where: { orderby: { field: DATE, order: DESC } }) {
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
            categories {
              edges {
                node {
                  children {
                    nodes {
                      name
                    }
                  }
                  
                  name
                }
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

export async function getCategories() {
  const data = await fetchAPI(
    `
    query AllCategory {
  categories(first: 10000) {
    edges {
      node {
      	name
        children {
          nodes {
            name
          }
        }
      }
    }
  }
}
  `
    
  );

  console.log("tess",data?.categories)
  return data?.categories;
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
            children {
                nodes {
                  name
                }
              }
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



// export async function getPortofolioBySlug(slug) {
//   const data = await fetchAPI(
//     `
//     query PortfolioItemBySlug($slug: ID!) {
//       portofolio(id: $slug, idType: DATABASE_ID) {
//         id
//         title
       
//       }
//     }
//   `,
//     {
//       variables: {
//         id: slug,
//         idType: "SLUG",
//       },
//     },
//   );

 
//   return data?.portofolio;
// }

export async function getServiceAndMoreServices(slug, preview, previewData) {
  const servicePreview = preview && previewData?.service;
  // The slug may be the id of an unpublished service
  const isId = Number.isInteger(Number(slug));
  const isSameService = isId
    ? Number(slug) === servicePreview.id
    : slug === servicePreview.slug;
  const isDraft = isSameService && servicePreview?.status === "draft";
  const isRevision = isSameService && servicePreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment serviceFields on service {
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
    query serviceBySlug($id: ID!, $idType: serviceIdType!) {
      service(id: $id, idType: $idType) {
        ...serviceFields
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
      services(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...serviceFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? servicePreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    },
  );

  // Draft services may not have an slug
  if (isDraft) data.service.slug = servicePreview.id;
  // Apply a revision (changes in a published service)
  if (isRevision && data.service.revisions) {
    const revision = data.service.revisions.edges[0]?.node;

    if (revision) Object.assign(data.service, revision);
    delete data.service.revisions;
  }

  // Filter out the main service
  data.services.edges = data.services.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 services, remove the last one
  if (data.services.edges.length > 2) data.services.edges.pop();

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

export async function getPortofolioBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPortofolio($id: ID = "") {
    portofolio(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: slug,
      },
    }
  );


  return data?.post;
}



export async function getPageBySlug(slug: string) {
  console.log('slug dari function',slug);
  const data = await fetchAPI(
    `
    query About {
      pages(where: {name: "${slug}"}) {
        edges {
          node {
            content
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
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
            excerpt
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
      },
    }
  );

  
  console.log('page by slug:', data)
  return data?.pages;
}


export async function getPortofolioPage(slug: string) {
  const data = await fetchAPI(
    `
    query PortofolioPage{
      portofolios(where: {name: "${slug}"}) {
        nodes {
          slug
          title
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
            image {
              node {
                sourceUrl
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
        }
      }
    }
  `,
    {
      variables: {
        slug: slug,
      },
    }
  );

  return data?.portofolios;
}
export async function getServicePage(slug: string) {
  const data = await fetchAPI(
    `
   query servicepage {
  services(where: {name: "${slug}"}) {
    nodes {
      
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
      }
    }
  }

  `,
    {
      variables: {
        slug: slug,
      },
    }
  );

  return data?.services;
}

// Function to fetch individual post ID by its slug
export async function getPostIdBySlug(slug) {
  const postData = await fetchAPI(
    `
   query postBySlug {
  posts(where: {name: "${slug}"}) {
    edges {
      node {
        postId
      }
    }
  }
}
    `,
    { variables: { slug } }
  );

  return postData.posts.edges[0]?.node.postId;
}