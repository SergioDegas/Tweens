import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./statusFilter";
import { selectCard, selectFollow } from "Redax/Cards/selector";

export const selectFilter = state => state.filter.status;

export const selectFiltered = createSelector(
  [selectCard, selectFilter, selectFollow],
  (users, statusFilter, follow) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter(user => !follow.includes(user.id));
      case statusFilters.followings:
        return users.filter(user => follow.includes(user.id));
      default:
        return users;
    }
  }
);

