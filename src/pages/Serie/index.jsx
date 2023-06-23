import "./index.scss";

const Serie = () => {
  const getNumberOfFolders = async (owner, repo) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/mulher-maravilha`
      );
      const data = await response.json();

      const numberOfFolders = data.filter((item) => item.type === "dir").length;
      return numberOfFolders;
    } catch (error) {
      console.error("Erro ao obter o número de pastas:", error);
    }
  };

  // Exemplo de uso:

  getNumberOfFolders("madrigueira", "pq-content").then((numberOfFolders) => {
    console.log("Número de pastas:", numberOfFolders);
  });

  return (
    <div className="serie">
      <h1></h1>
    </div>
  );
};

export default Serie;
