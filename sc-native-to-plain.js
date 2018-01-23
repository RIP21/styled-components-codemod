module.exports.parser = "babel";

module.exports = function (file) {
  return file.source.replace(/from 'styled-components\/native'/g, "from 'styled-components'")
    .replace(/from "styled-components\/native"/g, 'from "styled-components"')
    .replace(/require\("styled-components\/native"\)/g, 'require("styled-components")')
    .replace(/require\('styled-components\/native'\)/g, "require('styled-components')")
    .replace(/require\( "styled-components\/native" \)/g, 'require( "styled-components" )')
    .replace(/require\( 'styled-components\/native' \)/g, "require( 'styled-components' )")
};
