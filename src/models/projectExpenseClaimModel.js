const mongoose = require("mongoose");

const projectexpenseclaimsSchema = mongoose.Schema(
  {
    claimId: {
      type: String,
      required: [true],
    },
    projectId: {
      type: String,
      required: [true],
    },
    employeeId: {
      type: String,
      required: [true],
    },
    currencyId: {
      type: String,
      required: [true],
    },
    expenseDate: {
      type: String,
      required: [true],
    },
    amount: {
      type: Number,
      required: [true],
    },
    purpose: {
      type: String,
      required: [true],
    },
    changeToDefaultDept: {
      type: Boolean,
      default: false,
      required: [true],
    },
    alternativeDeptCode: {
      type: String,
      required: [true],
    },
    status: {
      type: String,
      required: [true],
    },
    lastEditedClaimDate: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

const ProjectExpenseClaims = mongoose.model(
  "ProjectExpenseClaims",
  projectexpenseclaimsSchema
);

module.exports = ProjectExpenseClaims;
