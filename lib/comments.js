import graphqlRequest from "./graphRequest";

export async function createComment(body) {
    console.log('bodii',body)
   
  const mutation = {
  query: `
    mutation createComment(
      $author: String = "${body.author}", 
      $authorEmail: String = "${body.authorEmail}",
      $clientMutationId: String = "uniqueId", 
      $commentOn: Int = ${body.postId},
      $content: String = "${body.content}"
    ) {
      createComment(
        input: {
          author: $author, 
          authorEmail: $authorEmail, 
          clientMutationId: $clientMutationId, 
          commentOn: $commentOn, 
          content: $content
        }
      ) {
        success
      }
    }
  `,
};
console.log('mutasi', mutation)
const resJson = await graphqlRequest(mutation);
console.log('res', resJson.errors[0].locations)
  return resJson;
}
