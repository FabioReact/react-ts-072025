import { render, screen } from "@testing-library/react";
import HeroCard from "./HeroCard";
import FavoriteContextProvider from "@/providers/FavoriteContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { useLocalStorage } from "usehooks-ts";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

vi.mock("usehooks-ts", () => ({
  useLocalStorage: vi.fn().mockReturnValue([null, vi.fn()]),
}));

const yoda = {
  id: 729,
  name: "Yoda",
  powerstats: {
    intelligence: 88,
    strength: 52,
    speed: 33,
    durability: 25,
    power: 100,
    combat: 90,
  },
  biography: {
    "full-name": "Yoda",
    "alter-egos": "No alter egos found.",
    aliases: ["-"],
    "place-of-birth": "-",
    "first-appearance": "Star Wars: Episode V - The Empire Strikes Back (1980)",
    publisher: "George Lucas",
    alignment: "good",
  },
  appearance: {
    gender: "Male",
    race: "Yoda's species",
    height: ["2'2", "66 cm"],
    weight: ["38 lb", "17 kg"],
    "eye-color": "Brown",
    "hair-color": "White",
  },
  work: {
    occupation: "-",
    base: "-",
  },
  connections: {
    "group-affiliation": "Jedi Order, Jedi High Counsl, Galactic Republic",
    relatives:
      "Master: N'Kata Del Gormo, Apprentices: Dooku, Cin Drallig, Ikrit, Rahm Kota, Ki-Adi-Mundi, Oppo Rancisis, Luke Skywalker",
  },
  image: {
    url: "https://www.superherodb.com/pictures2/portraits/10/100/10454.jpg",
  },
};

type WrappersProps = {
  children: React.ReactNode;
  isLoggedIn?: boolean;
};

const Wrappers = ({ children }: WrappersProps) => {
  const client = new QueryClient();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <FavoriteContextProvider>{children}</FavoriteContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  );
};

describe("HeroCard Component", () => {
  it("should not have any Star in HeroCard if user is not logged in", () => {
    render(
      <Wrappers>
        <HeroCard hero={yoda} />
      </Wrappers>,
    );
    const star = screen.queryByRole("checkbox");
    expect(star).not.toBeInTheDocument();
  });

  it("should have Star in HeroCard if user is logged in", () => {
    (useLocalStorage as jest.Mock).mockReturnValue(["mocked-token", vi.fn()]);
    render(
      <Wrappers>
        <HeroCard hero={yoda} />
      </Wrappers>,
    );
    const star = screen.queryByRole("checkbox");
    expect(star).toBeInTheDocument();
  });
});
