import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { sublinks, person } from "./data";
import reducer from "./components/Reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const [telescopes, setTelescopes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [people, setPeople] = useState(person);
  const [index, setIndex] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  /* const fetchPhones = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data);
      const { phones } = data;
      if (phones) {
        const newPhones = phones.map((item) => {
          const { id, title, img, price, amount } = item;
          return {
            id,
            title,
            img,
            price,
            amount,
          };
        });
        state.cart = newPhones;
      } else {
        state.cart = [];
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [state]);
 */

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  /* useEffect(() => {
    dispatch({ type: "GET TOTALS" });
  }, [state.cart, dispatch]); */

  /* ***Example of using useCallback funnction when fetchind data from api*** */

  /* const data = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
 */

  /*   const linksRef = useRef(null);
  const linksContainerRef = useRef(null); */

  /* const toggleLinks = () => {
    setShowLinks(!showLinks);
    return (
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {user.map((user, index) => {
            const { id, name, email } = user;
            return (
              <li key={index} {...user}>
                <a href="#">{name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }; */

  /* useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]); */

  /* changes state values */
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        telescopes,
        setTelescopes,
        loading,
        setLoading,
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        searchTerm,
        setSearchTerm,
        setIndex,
        index,
        people,
        setPeople,
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        /*  toggleLinks,
        linksContainerRef,
        linksRef, */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
