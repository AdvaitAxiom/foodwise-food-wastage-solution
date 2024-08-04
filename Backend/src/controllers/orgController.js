// controllers/organizationController.js
import Organization from "../models/orgModel.js";

// Create a new organization
export const createOrganization = async (req, res) => {
  const { name, email, phoneNo, about, type, address,password } = req.body;
  try {
    const newOrganization = new Organization({ name, email, phoneNo, about, type, address,password });
    await newOrganization.save();
    res.status(201).json(newOrganization);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};

// Get a single organization by ID
export const getOrganization = async (req, res) => {
  const { id } = req.params;
  try {
    const organization = await Organization.findById(id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.status(200).json(organization);
  } catch (error) {
    res.status(500).json({ message: "Error getting organization", error });
  }
};

// Get all organizations
export const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find({});
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: "Error getting organizations", error });
  }
};

// Delete an organization by ID
export const deleteOrganization = async (req, res) => {
  const { id } = req.params;
  try {
    const organization = await Organization.findByIdAndDelete(id);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.status(200).json({ message: "Organization deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting organization", error });
  }
};
