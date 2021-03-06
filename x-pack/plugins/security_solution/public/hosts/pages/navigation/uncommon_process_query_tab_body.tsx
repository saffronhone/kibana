/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { getOr } from 'lodash/fp';
import React from 'react';
import { useUncommonProcesses } from '../../containers/uncommon_processes';
import { HostsComponentsQueryProps } from './types';
import { UncommonProcessTable } from '../../components/uncommon_process_table';
import { manageQuery } from '../../../common/components/page/manage_query';

const UncommonProcessTableManage = manageQuery(UncommonProcessTable);

export const UncommonProcessQueryTabBody = ({
  deleteQuery,
  docValueFields,
  endDate,
  filterQuery,
  indexNames,
  skip,
  setQuery,
  startDate,
  type,
}: HostsComponentsQueryProps) => {
  const [
    loading,
    { uncommonProcesses, totalCount, pageInfo, loadPage, id, inspect, isInspected, refetch },
  ] = useUncommonProcesses({
    docValueFields,
    endDate,
    filterQuery,
    indexNames,
    skip,
    startDate,
    type,
  });
  return (
    <UncommonProcessTableManage
      deleteQuery={deleteQuery}
      data={uncommonProcesses}
      fakeTotalCount={getOr(50, 'fakeTotalCount', pageInfo)}
      id={id}
      inspect={inspect}
      isInspect={isInspected}
      loading={loading}
      loadPage={loadPage}
      refetch={refetch}
      setQuery={setQuery}
      showMorePagesIndicator={getOr(false, 'showMorePagesIndicator', pageInfo)}
      totalCount={totalCount}
      type={type}
    />
  );
};

UncommonProcessQueryTabBody.dispalyName = 'UncommonProcessQueryTabBody';
