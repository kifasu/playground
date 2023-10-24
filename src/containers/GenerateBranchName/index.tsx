import { useState } from "react";

import GenerateBranchNameValue from "./Value";
import GenerateBranchNameForm from "./Form";
import Flex from "components/Flex";
import { JUSTIFY_CONTENT } from "entities/tailwind";

const BranchNameGeneratorPage = () => {

  const [branchName, setBranchName] = useState('');

  return (
    <Flex justify={JUSTIFY_CONTENT.center} direction="column" salt="min-h-screen">
        <GenerateBranchNameValue value={branchName} />
        <GenerateBranchNameForm onChange={setBranchName} />
    </Flex>
  )
}

export default BranchNameGeneratorPage