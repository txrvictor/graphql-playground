import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { gql } from "../__generated__";

const GET_MODULE_AND_PARENT_TRACK = gql(`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`)

const Module = () => {
  const { moduleId = "", trackId = "" } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { moduleId, trackId },
  });
   
  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
