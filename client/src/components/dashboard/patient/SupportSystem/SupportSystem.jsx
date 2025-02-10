import React from "react";
import "./SupportSystem.css";
import DashboardHeader from "../../../layout/DashboardHeader/DashboardHeader";
import TertiaryButton from "../../../shared/buttons/TertiaryButton/TertiaryButton";

export default function SupportSystem() {
  const supports = [
    {
      issues: "Facing certain issues regarding new version",
      status: "Pending",
    },
    {
      issues: "Facing certain issues regarding new version",
      status: "Resolved",
    },
    {
      issues: "Facing certain issues regarding new version",
      status: "Pending",
    },
    {
      issues: "Facing certain issues regarding new version",
      status: "Pending",
    },
    {
      issues: "Facing certain issues regarding new version",
      status: "Pending",
    },
    {
      issues: "Facing certain issues regarding new version",
      status: "Resolved",
    },
    {
      issues: "Facing certain issues regarding new version",
      status: "Pending",
    },
    {
      issues: "Facing certain issues regarding new version",
      status: "Resolved",
    },
  ];

  return (
    <div className="SupportSystem">
      <DashboardHeader title={"Support System"}> </DashboardHeader>

      <div className="SupportSystemContent">
        <div className="grid-headers">
          <span>Issues</span>
          <span className="hideStatus">Status</span>
          <span>Actions</span>
        </div>
        {supports.map((support, index) => (
          <div className="grid-rows" key={index}>
            <span>{support.issues}</span>
            <span className="hideStatus">
              {support.status === "Resolved" ? (
                <span style={{ color: "green" }}>{support.status}</span>
              ) : (
                <span style={{ color: "#a4a434" }}>{support.status}</span>
              )}
            </span>
            <TertiaryButton text="Open Chat" textWrap="nowrap" padding="1em 0.5em"/>
          </div>
        ))}
      </div>
    </div>
  );
}
