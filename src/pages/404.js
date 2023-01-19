import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Сторінку не знайдено" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Ой, ми не очікували, що це станеться</h1>
        <p>
          Ви заблукали у невідомість. Дозвольте нам допомогти Вам. Перегляньте наведені нижче варіанти
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Назад на головну сторінку
      </Link>
      <Link to="/contact" className="button -outline">
        Відправити Повідомлення <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
