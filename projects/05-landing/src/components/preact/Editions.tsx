import { useState } from "preact/hooks"

// import { Galeria } from "./Galeria"
// import { Numeros } from "./Numeros"
import { Palmares } from "./Palmares"

import editions from "@/data/editions.json"
import styles from "@/components/styles/Editions.css"

export default function Edition({i18n}: {i18n: any}) {
  const [ edition, setEdition] = useState("1")

  return (
    <>
      <div className="flex h-24 mt-4">
        {
          editions.map(({ edition, name}) => {
            return (
              <button
                className={`
                  flex-1 rounded-t-2xl transition-colors text-white text-xl font-bold
                  ${styles.tab}
                  ${edition === edition ? "z/10" : "bg-[#222b5b] hover:bg-[#1b2663]"}
                `}
                onClick={() => setEdition(edition)}
              >
                {name}
              </button>
            )
          })
        }
      </div>
      {/* <Palmares i18n={i18n} edition={edition} /> */}
      {/* <Galeria i18n={i18n} edition={edition} /> */}
      {/* <Numeros i18n={i18n} edition={edition}/> */}
    </>
  )
}