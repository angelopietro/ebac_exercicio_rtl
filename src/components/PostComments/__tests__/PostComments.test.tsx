import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar dois comentários no Post", () => {
    render(<PostComment />);
    const textarea = screen.getByTestId("comment-textarea");
    const button = screen.getByTestId("comment-button");
    const comentarios = ["Comentário A", "Comentŕio B"];

    comentarios.forEach((comment) => {
      fireEvent.change(textarea, { target: { value: comment } });
      fireEvent.click(button);
    });

    const comments = screen.getAllByTestId("comment-data"); 
    expect(comments).toHaveLength(2);
  });
});
