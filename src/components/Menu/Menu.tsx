import React from "react";
import { NavLink } from "react-router-dom";

const Menu: React.VFC = () => {
  const LinkList = [
    { id: 1, url: "/", title: "ホーム" },
    { id: 2, url: "/users", title: "患者一覧" },
    { id: 3, url: "/records", title: "来客記録" },
    { id: 4, url: "/courses", title: "コース一覧" },
  ];
  return (
    <>
      <div className="fixed left-0 top-[6rem] h-full w-[28rem] border-r border-gray-100 bg-white">
        <div className="flex flex-col">
          <nav>
            <ul>
              <li>
                {LinkList.map((data) => (
                  <NavLink
                    key={data.id}
                    to={data.url}
                    className={({ isActive }) =>
                      isActive
                        ? "block h-full bg-gray-300 p-5 text-white"
                        : "block h-full bg-white p-5 hover:bg-gray-300 hover:text-white"
                    }
                  >
                    {data.title}
                  </NavLink>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
