import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import {
  create as createNaiveUI,
  NGrid, NGi
} from "naive-ui"

const naive_ui = createNaiveUI({
  components: [
    NGrid, NGi
  ]
})

export default naive_ui