import React, { useState, useEffect } from "react";
import {
  FormContainer,
  InputField,
  SubmitButton,
  ResultContainer,
  ResultItem,
  Formcontainermain,
  Loading,
  MainHeader,
} from "./StyledComponents";
import SimmerUI from "./SimmerUI";

const NameComponent = () => {
  const [name, setName] = useState("");
  const [memoizedData, setMemoizedData] = useState(null);
  const [networkIssue, setNetworkIssue] = useState(false);

  const fetchData = async (name) => {
    try {
      const [ageResponse, genderResponse, nationalityResponse] =
        await Promise.all([
          fetch(`https://api.agify.io/?name=${name}`),
          fetch(`https://api.genderize.io/?name=${name}`),
          fetch(`https://api.nationalize.io/?name=${name}`),
        ]);

      const ageData = await ageResponse.json();
      const genderData = await genderResponse.json();
      const nationalityData = await nationalityResponse.json();

      const data = {
        name,
        age: ageData?.age,
        gender: genderData?.gender,
        nationality: nationalityData?.country[0]?.country_id,
      };
      setMemoizedData(data);
      setNetworkIssue(false);
      if (ageData.age) {
        setName("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMemoizedData(null);
      setNetworkIssue(true);
    }
  };

  const handleButtonClick = () => {
    if (name) {
      fetchData(name);
    }
  };

  return (
    <>
      <MainHeader>Bio Info</MainHeader>
      <Formcontainermain>
        <FormContainer>
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SubmitButton disabled={name === ""} onClick={handleButtonClick}>
            Submit
          </SubmitButton>

          {memoizedData?.age ? (
            <ResultContainer>
              <ResultItem>Name: {memoizedData?.name}</ResultItem>
              <ResultItem>Age: {memoizedData?.age}</ResultItem>
              <ResultItem>Gender: {memoizedData?.gender}</ResultItem>
              <ResultItem>Nationality: {memoizedData?.nationality}</ResultItem>
            </ResultContainer>
          ) : (
            <>
              <Loading>
                {memoizedData?.name && memoizedData?.age === null
                  ? "Invalid input"
                  : networkIssue
                  ? "Network issue"
                  : "Loading..."}
              </Loading>
            </>
          )}
        </FormContainer>
      </Formcontainermain>
    </>
  );
};

export default NameComponent;
