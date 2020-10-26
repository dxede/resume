import React, { useState } from 'react';
import { useEffect } from 'react';
import useAppServices from '../hooks/use-app-services';
import Section from './section';

export default function ProvisionedSection({ title, mapFunc, fetchFunctionName, WrapperComponent }) {
  const { dataSvc } = useAppServices();
  const [data, setData] = useState([]);

  useEffect(() => {
    dataSvc[fetchFunctionName](setData);
    return;
  }, [dataSvc, fetchFunctionName]);

  return (
    <Section title={title}>
      {WrapperComponent ? <WrapperComponent>{data.map(mapFunc)}</WrapperComponent> : data.map(mapFunc)}
    </Section>
  )
}